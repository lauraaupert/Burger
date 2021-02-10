const express = require('express')
const burger = require('../models/burger')
const router = express.Router();

//create routes here

router.get('/', (req, res) => {
    burger.selectAll((data) => {
      const hbsObject = {
        burger: data,
      };
      console.log(hbsObject);
      res.render('index', hbsObject);
    });
  });

module.exports = router