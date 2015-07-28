'use strict';

// Test specific configuration
// ===========================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: process.env.MONGOLAB_URI || 
    process.env.MONGOHQ_URL ||
    process.env.OPENSHIFT_MONGODB_DB_URL+process.env.OPENSHIFT_APP_NAME ||
    'mongodb://localhost/workspace-test'
    //uri: 'mongodb://heroku_r2bj9pfm:qdcgm69ftg1psopqdcnru84gfu@ds027483.mongolab.com:27483/heroku_r2bj9pfm'//'mongodb://localhost/workspace-test'
  }
};