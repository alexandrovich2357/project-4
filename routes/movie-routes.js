const express = require('express');
const router  = express.Router();

// include the model:
const Movie = require('../models/movie');

router.get('/movies', (req, res, next) => {
    Movie.find()
    .then(moviesFromDB => {
        res.status(200).json(moviesFromDB)
    })
    .catch(err => next(err))
})

router.post('/movies/create', (req, res, next) => {
    // console.log('body: ', req.body); ==> here we can see that all
    // the fields have the same names as the ones in the model so we can simply pass
    // req.body to the .create() method
    
    Movie.create(req.body)
    .then( aNewMovie => {
        // console.log('Created new movie: ', aNewMovie);
        res.status(200).json(aNewMovie);
    })
    .catch( err => next(err) )
})

module.exports = router;
