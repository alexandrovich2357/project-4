const express = require('express');
const router  = express.Router();

// include the model:
const Image = require('../models/image');
const User = require('../models/user');

router.get('/images', (req, res, next) => {
    Image.find()
    .then(imagesFromDB => {
        res.status(200).json(imagesFromDB)
    })
    .catch(err => next(err))
})
router.get('/users', (req, res, next) => {
    User.find()
    .then(userFromDb => {
        res.status(200).json(userFromDb)
    }).catch(err => {
        console.log(err)
    })
})

router.post('/images/create', (req, res, next) => {
    // console.log('body: ', req.body); ==> here we can see that all
    // the fields have the same names as the ones in the model so we can simply pass
    // req.body to the .create() method
    
    Image.create(req.body)
    .then( aNewImage => {
        console.log('Created new image: ', aNewImage);
        res.status(200).json(aNewImage);
        // return saveImagetoUser(aNewImage)
    })
    .catch( err => next(err) )
})

const saveImagetoUser = async (data) => {
    console.log('Este es el data', data)
   await User.findOneAndUpdate( 
    
        {'username': data.title},
        {'image' : data.imageUrl}
        )
        return data
}

module.exports = router;
