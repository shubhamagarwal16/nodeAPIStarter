var express = require('express');
var router = express.Router();

const userC = require('../controllers/userC');

router.post('/signup', userC.signup);
router.post('/login', userC.login);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
