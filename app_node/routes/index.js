var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.setHeader('Content-Type', 'application/json')
	res.end(JSON.stringify("test"))
});

module.exports = router;