'use strict';
const express = require('express');
const router = express.Router();
const knex = require('knex')(require('../knexfile')[process.env.DB_ENV]);

router.get('/', (req,res,next) => {
 res.json({message: "test"});
})


module.exports = router;
