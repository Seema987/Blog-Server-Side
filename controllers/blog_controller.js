const express = require('express')
const router = express.Router()
const Blog = require('../models/blog.js')

router.get('/', (req, res) => {
    Blog.findAll()
        .then(posts => res.json({ result: 'successful', posts }))
}),

router.get('/:id', (req, res) => {
    Blog
    .findById(id)
    .then(post => res.json({result: 'successful', post}))
})


    


module.exports = router