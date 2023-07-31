const express = require('express');

const {
  signUp,
  login
} = require('./auth.controller');

const authRouter = express.Router();

authRouter.post('/sign-up', signUp);
authRouter.post('/login', login);


module.exports = authRouter;

