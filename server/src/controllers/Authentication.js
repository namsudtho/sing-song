const { User } = require('../models')
const jwt = require('jsonwebtoken')
require('dotenv').config()

function jwtSignUser (user) {
  return jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES
  })
}

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      const userJson = {
        id: user.id,
        email: user.email
      }
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      res.status(400).send({
        error: 'This email account is already in use.'
      })
    }
  },
  async login (req, res) {
    try {
      const {
        email,
        password
      } = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })

      if (!user) {
        return res.status(403).send({
          error: 'The login information was incorrect'
        })
      }

      const isPasswordValid = await user.comparePassword(password)
      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'The login information was incorrect'
        })
      }

      const userJson = {
        id: user.id,
        email: user.email
      }
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to log in'
      })
    }
  }
}
