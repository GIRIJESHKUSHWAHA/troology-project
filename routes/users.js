const express = require('express');
const { ensureAuth } = require('../middleware/auth');
const router = express.Router();
const User = require('../models/User');
const _ = require('lodash');

router.get('/edit', ensureAuth, async (req, res) => {
  try {

    const user = await User.findById(req.user.id).lean();
    res.render('user/edit', { user });
  } catch (err) {
    console.log(err);
  }
});

router.put('/edit/:id', async (req, res) => {
  try {
    data = await User.findOneAndUpdate(
      { _id: req.params.id },
      _.pick(req.body, ['name', 'mobile', 'address']),
    );
    const user = await User.findById(req.params.id).lean();
    res.render('profile', { user });
  } catch (er) {
    console.log(er);
  }
});

module.exports = router;
