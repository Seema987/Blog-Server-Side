const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

const User = require('../models/user')



router.post('/', (req, res) => {
    const { username, email, password, backgroundColor } = req.body

    User
        .findByEmail(email)
        .then(user => {
            if (user) {
                res.status(400).json({ error: 'Email already registered.' })
            } else {


                const passwordDigest = bcrypt.hashSync(password, bcrypt.genSaltSync(12), null)
                User
                    .create(username, email, passwordDigest, backgroundColor)
                    .then(email => {
                        res.json(email)
                    })
            }
        });
})



// router.get('/', (req, res) => {
//     const userId = req.session.userId
//     if (userId) {
//     User
//         .findById(userId)
//         .then(email => res.json({ result: 'successful', email: email}))
//             } else {
//                 res.json({})
//             }
//         })

module.exports = router