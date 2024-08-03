const express = require('express')
const authServices = require('../services/authServices')
const router = express.Router();


router.post('/register',  async (req, res) => {
    try {
      let body = req.body
      const data = await authServices.userRegister(body)
      res.status(201).send({message:'User registered successfully'});
    }
    catch (e) {
     console.log(e)
     res.status(500).send({message:e?.message});
    }
})

router.post('/login', async (req, res) => {
  try {
    let body = req.body 
    let data = await authServices.userLogin(body);
    res.status(201).send({token:data});
  }
  catch (e) {
   console.log(e)
   res.status(500).send({message:e?.message});
  }
})


module.exports = router;