const environ = require('dotenv').config(); 

module.exports = require('./'+ process.env.ENVIRON);