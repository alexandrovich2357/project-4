const express = require("express");
const router = express.Router();

const Tiendas = require('../models/Tiendas');


router.get('/locksmith', async (req, res, next) => { 
    try{
     const tiendas =  await Tiendas.find()
        res.json(tiendas)
    }catch(err){
        console.log(err)
    }
})


router.get('/locksmith/:id', async (req, res, next) => { 
  const {id} = req.params.id;
    try {
      const todos = await Tiendas.findOne(id);
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
      return saveImagetoUser(aNewImage)
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
 try{await User.findOneAndUpdate( 
  
      {'username': data.title},
      {'image' : data.imageUrl}
      )
      return data}catch(error){
        console.log(error)
      }
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
