var express = require('express');
var controller = require('./users.controller');
var router = express.Router();
var authenticate = require('../../middleware/auth');
var preauth = require('../../middleware/preauth');

router.get('/getAll', authenticate, controller.getAll);
router.get('/getOne/:id',   controller.getOne);
router.post('/invite', controller.invite);
router.post('/login', preauth, controller.login);
router.post('/register',controller.create);
router.put('/update/:id',controller.update);
router.delete('/delete/:id', controller.delete);
router.delete('/deleteAll', controller.deleteAll);
router.post('/passwordresettoken', controller.passwordResetToken);
router.post('/passwordreset',  controller.passwordReset);

module.exports = router;
