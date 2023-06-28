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
                res.status(400).json({ error: 'Invalid Credentials' })
            } else {

                const isValidPassword = bcrypt.compareSync(password, user.password_digest)

                if (user && isValidPassword) {
                    req.session.userId = user.id
                    res.json({ email: user.email })
                }
            }
        })

})


router.get('/', (req, res) => {
    const userId = req.session.userId
    if (userId) {
        User
            .findById(userId)
            .then(user => res.json({ result: 'successful', user: { id: user.id, backgroundColor: user.backgroundcolor, email: user.email, name: user.name, profilePicture: user.profilepicture } }))
    } else {
        res.json({})
    }
})

router.delete("/", (req, res) => {

    req.session.destroy(error => {
        res.clearCookie("user_sid")
        console.log("test error")
        res.json({ success: true })
    })
})

module.exports = router