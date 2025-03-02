const express = require('express');

const route = express.Router();

const feedController = require('../controller/feed');

route.get('/posts', feedController.getPosts);

module.exports = route;