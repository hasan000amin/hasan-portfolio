// =============================================
// Error Handler Middleware
// =============================================

/**
 * 404 Not Found handler
 */
exports.notFoundHandler = (req, res, next) => {
  res.status(404).render('error', {
    title: '404 - Halaman Tidak Ditemukan',
    description: 'Halaman yang Anda cari tidak ditemukan atau tidak ada.',
    error: {
      code: 404,
      message: 'Halaman Tidak Ditemukan',
      description: 'Halaman yang Anda cari mungkin telah dipindahkan atau dihapus.',
    },
  });
};

/**
 * Global error handler
 */
exports.errorHandler = (err, req, res, next) => {
  console.error('🔥 Error:', err.stack || err.message || err);

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Terjadi kesalahan internal server';

  // JSON response for API routes
  if (req.path.startsWith('/api/')) {
    return res.status(statusCode).json({
      success: false,
      error: {
        code: statusCode,
        message: process.env.NODE_ENV === 'production' ? 'Internal Server Error' : message,
      },
    });
  }

  // HTML response for page routes
  res.status(statusCode).render('error', {
    title: `${statusCode} - Error`,
    description: message,
    error: { code: statusCode, message, description: message },
  });
};

/**
 * Async handler wrapper to avoid try-catch in every route
 */
exports.asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};
