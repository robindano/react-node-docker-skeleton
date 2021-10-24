var express = require('express')
var router = express.Router()
var db = require('../lib/db')


router.get('/', async function(req, res, next) {
	res.setHeader('Content-Type', 'application/json')
	const result = await db.any('SELECT * FROM todo_lists')
	res.end(JSON.stringify(result))
});

module.exports = router;