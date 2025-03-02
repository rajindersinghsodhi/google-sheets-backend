const express = require('express');
const {registerUser, getUsers} = require('../controllers/userController.js')

const router = express.Router();

router.get('/', getUsers);

module.exports = router;
