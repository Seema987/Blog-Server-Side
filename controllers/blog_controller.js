const express = require('express')
const router = express.Router()
const Blog = require('../models/blog.js')
const User = require('../models/user.js')

router.get('/', (req, res) => {

    Blog.findAll()
        .then(posts => res.json({ result: 'successful', posts }))
})

 //.............................********..........................................

router.get('/:id', (req, res) => {
    Blog
    .findById(id)
    .then(post => res.json({result: 'successful', post}))
})

 //.............................********..........................................

router.post('/', (req, res) => {
    const title = req.body.title
    const desc = req.body.desc
    const img = req.body.img

    Blog
        .addPost(title, desc, img)
        .then(post => res.json(post))
})

 //.............................********..........................................

router.post('/:id', (req,  res) =>{
    const user_comment = req.body.user_comment
    const post_id = req.params.post_id
    const user_id = req.params.user_id

    Blog
        .commentPost(user_comment, post_id, user_id)
        .then(comment => res.json(comment))
})

 //.............................********..........................................

router.post('/:id', (req, res) => {
    const post_id = req.params.post_id
    const title = req.body.title
    const desc = req.body.desc
    const img = req.body.img

    Blog
        .update(post_id , title, desc, img)
        .then(posts => res.json(posts))
})

 //.............................********..........................................

router.delete('/:id', (req, res) => {
    const post_id = req.params.id

    Blog
        .delete(post_id)
        .then(post => res.json(post))
})




    


module.exports = router