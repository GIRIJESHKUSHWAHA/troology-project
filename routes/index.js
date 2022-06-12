const express = require('express');
const { ensureAuth, ensureGuest } = require('../middleware/auth');
const router = express.Router();
const User = require('../models/User');

router.get('/', ensureGuest, (req, res) => {
  res.render('login', {
    layout: 'login',
  });
});

router.get('/profile', async (req, res) => {
  try {
    const user = await User.findById(req.user.id).lean();
    res.render('profile', {
      name: req.user.firstName,
      user,
      imgSrc: req.user.image,
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
