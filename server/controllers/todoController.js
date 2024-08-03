const express = require('express')
const todoServices = require('../services/todoServices')
const router = express.Router();

router.get('/', async (req, res) => {
    try {
      let userId = req?.user?._id
      const data = await todoServices.getAllTodos(userId);
      res.status(200).send(data);
    }
    catch (e) {
     console.log(e)
     res.status(500).send({message:e?.message});
    }
});

router.post('/', async (req, res) => {
  try {
    let userId = req?.user?._id
    const body = req.body; 
    const data = await todoServices.createTodo(userId, body);
    res.status(200).send({message:'todo created successfully'});
  }
  catch (e) {
   console.log(e)
   res.status(500).send({message:e?.message});
  }
});

router.put('/:id', async (req, res) => {
  try {
    let id = req.params.id
    let userId = req?.user?._id
    let body = req.body 
    const data = await todoServices.updateTodo(userId, id, body);
    res.status(200).send({message:'todo updated successfully'});
  }
  catch (e) {
   console.log(e)
   res.status(500).send({message:e?.message});
  }
});

router.delete('/:id', async (req, res) => {
  try {
    let id = req.params.id
    let userId = req?.user?._id
    const data = await todoServices.deleteTodo(userId, id);
    res.status(200).send({message:'todo deleted successfully'});
  }
  catch (e) {
   console.log(e)
   res.status(500).send({message:e?.message});
  }
});


module.exports = router;