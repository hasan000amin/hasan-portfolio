// =============================================
// i18n Middleware
// Bilingual support: English (default) & Indonesian
// =============================================

const path = require('path');
const fs = require('fs');

// Load locale files
const localesDir = path.join(__dirname, '..', 'locales');
const locales = {};

fs.readdirSync(localesDir).forEach(file => {
  if (file.endsWith('.json')) {
    const lang = file.replace('.json', '');
    locales[lang] = JSON.parse(fs.readFileSync(path.join(localesDir, file), 'utf-8'));
  }
});

/**
 * Get a translation value by dot-notation key.
 * e.g., t('hero.cta.works') -> 'View Works'
 */
function t(key, langObj) {
  if (!key || !langObj) return key;
  const keys = key.split('.');
  let val = langObj;
  for (const k of keys) {
    if (val && typeof val === 'object' && k in val) {
      val = val[k];
    } else {
      return key; // fallback: return the key itself
    }
  }
  return typeof val === 'string' ? val : key;
}

/**
 * i18n middleware
 * Detects language from: query param (?lang=) > cookie > header > default (en)
 */
function i18nMiddleware(req, res, next) {
  // Detect language
  let lang = req.query.lang 
    || (req.cookies && req.cookies.lang)
    || req.headers['accept-language']?.split(',')[0]?.split('-')[0]
    || 'en';

  // Fallback to 'en' if locale not available
  if (!locales[lang]) {
    lang = 'en';
  }

  const langObj = locales[lang];

  // Attach to req
  req.lang = lang;
  req.langObj = langObj;

  // Attach to res.locals for views
  res.locals.lang = lang;
  res.locals.langDir = langObj.dir || 'ltr';

  // Only set cookie if came from query param
  if (req.query.lang) {
    res.cookie('lang', lang, {
      maxAge: 365 * 24 * 60 * 60 * 1000, // 1 year
      httpOnly: true,
      sameSite: 'lax',
    });
  }

  // The __() helper for EJS templates
  res.locals.__ = (key) => t(key, langObj);

  // _d() helper for bilingual data objects {en: '...', id: '...'}
  res.locals._d = (data) => {
    if (data && typeof data === 'object' && 'en' in data && 'id' in data) {
      return data[lang];
    }
    return data;
  };

  // Also expose the full locale as JSON for JavaScript
  res.locals.localeJSON = JSON.stringify(langObj);

  next();
}

module.exports = { i18nMiddleware, locales };
