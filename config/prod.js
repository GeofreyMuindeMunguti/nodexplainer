const environ = require('dotenv').config(); 

let config = {
    mongo: {
         url: process.env.DATABASEURLPROD
    },
    Secret: process.env.SECRETEPROD
};

module.exports = config;