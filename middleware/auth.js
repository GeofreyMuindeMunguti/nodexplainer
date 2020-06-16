const environ = require('dotenv').config();
const jwt = require('jsonwebtoken');

const jwtKey = process.env.ENVIRON == 'dev' ? process.env.SECRETEDEV : process.env.SECRETEPROD
module.exports = function authenticate(req, res, next) {

        if(req.headers.token){
            var payload
            try {
                payload = jwt.verify(req.headers.token, jwtKey);
                 
            } catch (e) {
                if (e instanceof jwt.JsonWebTokenError) {
                    // if the error thrown is because the JWT is unauthorized, return a 401 error
                    return res.status(401).end()
                }
                // otherwise, return a bad request error
                return res.status(400).end()
            }
            // next will then call the api endpoint.
            // you can an additional authentication here for permissions
            return next();
            
        }else{
            res.status(500).json("Unauthorized")
        }
    }
 