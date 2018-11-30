const User = require('../model/user')
const bcrypt = require('bcryptjs')
const axios = require('axios')
const jwt = require('jsonwebtoken')
require('dotenv').config()


module.exports = {

    signIn: function (req, res, next) {
        let options = {
            url: `https://graph.facebook.com/v3.2/me?fields=id,name,email&access_token=${req.body.accessToken}`,
            json: true,
            method: 'GET'
        }
        axios(options)
            .then(function (accessToken) {
                console.log(accessToken)
                let token = jwt.sign({
                    id: accessToken.data.id,
                    name: accessToken.data.name,
                    email: accessToken.data.email
                }, process.env.jwt_secret)

                res.status(200).json(token)
            })
            .catch(function (err) {
                res.status(400).json(err)
            })

    }
}