const mongoose = require('mongoose');
const CONFIG = require('../../config');

let cached = global.mongoose;

if (!cached) {
  global.mongoose = { conn: null, promise: null };
  cached = global.mongoose;
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false
    };

    cached.promise = mongoose.connect(CONFIG.MONGO_URI, opts).then(mongooseInstance => ({
      mongooseInstance
    }));
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    throw error;
  }

  return cached.conn;
}

function getMongoStatus() {
  return {
    dbState: mongoose.STATES[mongoose.connection.readyState]
  };
}

module.exports = {
  dbConnect,
  getMongoStatus
};
