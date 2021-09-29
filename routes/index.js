const express = require('express');
const User = require('../db/models/User');

const router = express.Router();

router.get('/', async (req, res) => {
    const allUsers = await User.findAll().catch(err => {res.status(500).json('error finding users :(')});
    res.status(200).json(allUsers);
  });
  
  router.post('/', async (req, res) => {
    const newUser = await User.create(req.body).catch(err => {res.status(500).json('error creating user :(')});;
    res.status(201).json(newUser);
  });


  module.exports = router;