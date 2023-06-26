const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

const User = require('../models/user')
router.post('/', (req, res) => {
    const { email, password } = req.body

    User
        .findByEmail(email)
        .then(user => {

            if (!user || email == '' || password == '') {
                res.status(400).json({ error: 'email and/or password cannot be blank' })
            } else {

                const isValidPassword = bcrypt.compareSync(password, user.password_digest)

                if (user && isValidPassword) {
                    // req.session.userId = user.id
                    res.json({ email: user.email })
                }
            }
        })

})

module.exports = router