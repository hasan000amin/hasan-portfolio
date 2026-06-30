// =============================================
// App Configuration
// =============================================

const path = require('path');

const config = {
  // Server
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || 'development',

  // Paths
  paths: {
    root: path.join(__dirname, '..'),
    public: path.join(__dirname, '..', 'public'),
    views: path.join(__dirname, '..', 'views'),
    uploads: path.join(__dirname, '..', 'public', 'uploads'),
  },

  // Site info
  site: {
    title: process.env.SITE_TITLE || 'Hasan Amin - Portfolio',
    description: process.env.SITE_DESCRIPTION || 'Fullstack Developer & Dosen',
    url: process.env.SITE_URL || 'https://hasanamin.my.id',
    author: 'Hasan Amin',
  },

  // Email (optional)
  email: {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
    contact: process.env.CONTACT_EMAIL,
  },

  // CORS
  cors: {
    origin: process.env.NODE_ENV === 'production'
      ? process.env.SITE_URL
      : '*',
  },
};

module.exports = config;
