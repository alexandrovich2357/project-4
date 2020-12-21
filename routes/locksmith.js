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


router.get('/locksmith/:id', async (req, res, next) => { 
  const {id} = req.params;
    if(!ObjectId.isValid(id) && !id.match(/^[a-fA-F0-9]{24}$/)){
      return res.status(404).send({
        success: 'false',
        message: 'todo does not exist',
      });
    }
    try {
      const todos = await Tiendas.findById(id);
      res.json(todos);
    } catch (error) {
      console.log(error);
    }
})






router.post('/locksmith', async (req, res, next) => {
    let newTiendas = new Tiendas(req.body);
    if (!req.body.name) {
      return res.status(400).send({
        success: 'false',
        message: 'title is required',
      });
    }
    try {
      const tienda = await newTiendas.save();
      res.status(200).json(tienda);
      // return saveImagetoUser(aNewImage)
    } catch (error) {
      res.status(400).send({
        success: 'false',
        message: 'Unable to save to database',
      });
    }
})

router.put('/locksmith/:id', async (req, res, next) => {
    const {id} = req.params;
    const data = req.body;
  try {
    const updated = await Tiendas.findByIdAndUpdate(id, data, {new:true});
    return res.status(200).json(updated);

  } catch (error) {
    res.json(error);
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
