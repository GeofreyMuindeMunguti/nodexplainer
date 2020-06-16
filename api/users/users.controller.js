const userService = require('../../services/user.service');
const mailService = require("../../services/mail.service");

exports.login = (req, res, next) => {
    userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(401).json({ message: 'Email or password is incorrect' }))
        .catch(err => next(err));
};

exports.create = (req, res, next) => {
    userService.create(req.body)
        .then(user => user ? res.json(user) : res.status(409).json({ message: 'User already Exists' }))
        .catch(err => next(err));

};

exports.getAll = (req, res, next) => {
    userService.getAll()
        .then(users => { res.json(users); })
        .catch(err => next(err));
};

exports.getOne = (req, res, next) => {
    userService.getOne(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
};

exports.update = (req, res, next) => {
    userService.update(req.params.id, req.body)
        .then((user)=> res.json(user))
        .catch(err => next(err));
};

exports.delete = (req, res, next) => {
    userService.delete(req.params.id)
        .then(()=> res.json({}))
        .catch(err => next(err));
};
exports.deleteAll = (req, res, next) => {
    userService.deleteAll()
        .then(()=> res.json({}))
        .catch(err => next(err));
};

exports.invite = (req, res, next) => {
  mailService.inviteUser(req.body)
      .then(e =>res.json({}))
      .catch(err => {res.sendStatus(401); console.log(err)});
  };

exports.passwordResetToken = (req, res, next) =>{
  userService.passwordResetToken(req.body)
   .then(user=>res.json(user))
   .catch(err=> next(err));
}

exports.passwordReset =(req, res, next) => {
    userService.passwordReset(req.body)
    .then(user => res.json(user))
    .catch(err=> next(err));
}