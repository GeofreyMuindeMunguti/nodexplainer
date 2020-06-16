const environ = require('dotenv').config(); 

let config = {
    mongo: {
         url: process.env.DATABASEURLDEV
    },
    Secret: process.env.SECRETEDEV
};

module.exports = config;