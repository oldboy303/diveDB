'use strict';
const express = require('express');
const router = express.Router();
const knex = require("../db/knex.js");

router.get('/', (req,res,next) => {
 res.json({message: "test"});
})


module.exports = router;
