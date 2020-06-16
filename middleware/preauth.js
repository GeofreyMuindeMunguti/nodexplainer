var environ = require('dotenv').config();
var secrete = process.env.ENVIRON == 'dev' ? process.env.SECRETEDEV : process.env.SECRETEPROD
module.exports = function authenticate(req, res, next) {
    if(req.headers.secrete){
        if(req.headers.secrete == secrete){
            return next();
        }
        res.status(500).json("Unauthorized");
    }else{
        res.status(500).json("Unauthorized")
    }
}