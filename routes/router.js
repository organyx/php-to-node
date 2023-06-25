const { StatusCodes } = require('http-status-codes');
const { API } = require('../config');
const ProductRouter = require('./v1/product.router');

function initializeRoutes(app) {
  app.get(`${API.PREFIX}/health-check`, (req, res) => {
    res.json({
      message: 'OK',
      uptime: process.uptime(),
      date: new Date().toISOString()
    });
  });

  app.use(`${API.PREFIX}/v1/products`, ProductRouter);

  app.use((error, req, res, next) => {
    next(error);
  });

  app.use((error, req, res, next) => {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: error?.message,
      stack: error?.stack
    });
  });
}

module.exports = { initializeRoutes };
