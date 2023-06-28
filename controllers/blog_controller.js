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
    const id = req.params.id;
    Blog
    .findById(id)
    .then(post => res.json({result: 'successful', post}))
})

 //.............................********..........................................

router.post('/', (req, res) => {
    const title = req.body.title
    const desc = req.body.desc
    const img = req.body.img
    const date = req.body.date
    //console.log(title, desc,img, date)
    console.log(req.body)

    Blog
        .addPost(title, desc, img, date)
        .then(post => res.json(post))
})

 //.............................********..........................................

router.post('/:id/comments', (req,  res) =>{
    const user_comment = req.body.user_comment
    const post_id = req.params.id
    const user_id = 1; // Need to add session

    Blog
        .commentPost(user_comment, post_id, user_id)
        .then(comments => res.json({result: 'successful', comments}))
})

//.............................********..........................................

router.get('/:id/comments', (req, res) => {
    const id = req.params.id;
    Blog
    .findByPostId(id)
    .then(comments => res.json({result: 'successful', comments}))
})


 //.............................********..........................................

router.post('/:id/update', (req, res) => {
    const id = req.params.id
    const title = req.body.title
    const desc = req.body.description
    const img = req.body.img
    const date = req.body.date

    Blog
        .update(id , title, desc, img, date)
        .then(posts => res.json(posts))
})

 //.............................********..........................................

router.delete('/:id/delete', (req, res) => {
    const id = req.params.id

    Blog
        .delete(id)
        .then(post => res.json(post))
})




    


module.exports = router