const express = require('express')
const passport = require('passport')  // passport is a middleware that helps us authenticate users
const router = express.Router()

router.get('/google', passport.authenticate('google', { scope: ['email', 'profile'] }))

//GET to profile
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/profile')
  })

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
})

module.exports = router
