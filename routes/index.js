const express = require('express');
const controllers = require('.././controllers');

let router = express.Router();

router.get('/', controllers.main.init);
router.post('/add', controllers.main.create);
router.get('/all', controllers.main.view);

module.exports = router;
