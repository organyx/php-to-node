const cookieParser = require('cookie-parser');
const cors = require('cors');
const express = require('express');
const CONFIG = require('./config');
const { initializeRoutes } = require('./routes/router');
const { dbConnect } = require('./lib/mongo');
const http = require('http');

const expressApp = express();

const initializeApp = app => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(cors());
};

const server = http.createServer(expressApp);

const startServer = async () => {
  try {
    initializeApp(expressApp);
    initializeRoutes(expressApp);

    await dbConnect();

    server.listen(CONFIG.PORT, () => {
      console.log(`Server is listening on port ${CONFIG.PORT}`);
    });

    process.on('unhandledRejection', (reason, promise) => {
      console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    });
  } catch (err) {
    console.error(err);
  }
};

startServer();
