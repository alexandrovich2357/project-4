const express = require("express");
const router = express.Router();

const Todo = require('../models/Todo');


router.get('/locksmith', (req, res, next) => {
    Todo.find()
    .then((data) => {
        res.json(data)
        
    }).catch(err => {
        console.log(err)
    })
})

router.post('/locksmith', async (req, res, next) => {
    let newTodo = new Todo(req.body);
    if (!req.body.name) {
      return res.status(400).send({
        success: 'false',
        message: 'title is required',
      });
    }
    try {
      const todo = await newTodo.save();
      res.status(200).json(todo);
    } catch (error) {
      res.status(400).send({
        success: 'false',
        message: 'Unable to save to database',
      });
    }
})

module.exports = router;
