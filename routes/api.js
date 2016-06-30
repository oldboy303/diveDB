var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../knexfile')[process.env.DB_ENV]);

router.get('/', function(req,res,next) {
 res.json({message: "test"});
})


module.exports = router;
