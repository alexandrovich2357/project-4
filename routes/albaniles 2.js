const express = require("express");
const router = express.Router();

const Albaniles = require('../models/Albaniles');

router.get('/albaniles', (req, res, next) => {
    Albaniles.find()
    .then(data => {
        res.status(200).json(data)
    })
})


module.exports = router;
