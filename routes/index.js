// =============================================
// Index Routes
// =============================================

const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageController');

// Homepage
router.get('/', pageController.home);

// Health check
router.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// Contact form submission (POST)
router.post('/api/contact', pageController.contact);

module.exports = router;
