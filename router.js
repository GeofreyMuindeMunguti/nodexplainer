const express = require('express');
 exports.register = (app) => {
    app.use('/api/v1/users', require('./api/users'));
};
