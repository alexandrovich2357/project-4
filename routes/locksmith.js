const express = require("express");
const router = express.Router();

const Tiendas = require('../models/Tiendas');


router.get('/locksmith', (req, res, next) => { 
    Tiendas.find()
    .then((data) => {
        res.json(data)
        
    }).catch(err => {
        console.log(err)
    })
})

router.post('/locksmith', async (req, res, next) => {
    let newTiendas = Tiendas.create(req.body);
    
    try {
      const tienda = await newTiendas.save();
      res.status(200).json(tienda);
      return saveImagetoUser(aNewImage)
    } catch (error) {
      res.status(400).send({
        success: 'false',
        message: 'Unable to save to database',
      });
    }
})

const saveImagetoUser = async (data) => {
  console.log('Este es el data', data)
 await User.findOneAndUpdate( 
  
      {'username': data.title},
      {'image' : data.imageUrl}
      )
      return data
}

router.delete('/locksmith/:id', async (req, res, next) => {
  const {id} = req.params;
    try {
      const deleted = await Tiendas.findByIdAndRemove(id);
      return res.status(200).json(deleted);
    } catch (error) {
      res.status(400).send({
        success: 'false',
        message: 'Unable to delete from database',
      });
    }
})

module.exports = router;
