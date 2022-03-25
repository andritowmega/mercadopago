var express = require('express');
var router = express.Router();
const UserController = require("../controllers/user.controller");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/mercadopago', UserController.MercadoPago);

module.exports = router;
