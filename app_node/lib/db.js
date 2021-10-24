var pgp = require('pg-promise')(/* options */)
var db = pgp(`postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@db:5432/${process.env.POSTGRES_DB}`)

module.exports = db;