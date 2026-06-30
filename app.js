// =============================================
// Portfolio - Hasan Amin
// Express Entry Point
// =============================================

const express = require('express');
const path = require('path');
require('dotenv').config();

// Import configurations
const appConfig = require('./config/app');
const pkg = require('./package.json');
const { errorHandler, notFoundHandler } = require('./middleware/errorHandler');

// Import routes
const indexRoutes = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3000;

// =============================================
// View Engine Setup
// =============================================
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// =============================================
// Middleware
// =============================================

// Security headers
app.use(require('helmet')({
  contentSecurityPolicy: false, // Disabled for dev - enable in production
  crossOriginEmbedderPolicy: false,
}));

// CORS
app.use(require('cors')());

// Request logging
app.use(require('morgan')(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

// Compression
app.use(require('compression')());

// Body parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Rate limiting (optional - uncomment for production)
// const rateLimit = require('express-rate-limit');
// app.use('/api', rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 100,
//   message: { error: 'Too many requests, please try again later.' }
// }));

// =============================================
// Static Files
// =============================================
app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: process.env.NODE_ENV === 'production' ? '1d' : 0,
  etag: true,
  setHeaders: (res, path) => {
    // Don't cache HTML files
    if (path.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    }
  },
}));

// =============================================
// Global Variables for Views
// =============================================
app.use((req, res, next) => {
  res.locals.siteTitle = process.env.SITE_TITLE || 'Hasan Amin - Portfolio';
  res.locals.siteDescription = process.env.SITE_DESCRIPTION || 'Fullstack Developer & Dosen';
  res.locals.siteUrl = process.env.SITE_URL || 'https://hasanamin.my.id';
  res.locals.currentYear = new Date().getFullYear();
  res.locals.currentPath = req.path;
  res.locals.buildVersion = pkg.version;
  res.locals.navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Tech Stack', href: '#techstack' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Contact', href: '#contact' },
  ];
  next();
});

// =============================================
// Routes
// =============================================
app.use('/', indexRoutes);

// =============================================
// Error Handling
// =============================================

// 404 handler
app.use(notFoundHandler);

// Global error handler
app.use(errorHandler);

// =============================================
// Server Start
// =============================================
app.listen(PORT, () => {
  console.log(`\n  🚀 Portfolio is running!`);
  console.log(`  📡 Local:    http://localhost:${PORT}`);
  console.log(`  🌐 Network:  http://0.0.0.0:${PORT}`);
  console.log(`  ⚡ Mode:     ${process.env.NODE_ENV || 'development'}\n`);
});

module.exports = app;
