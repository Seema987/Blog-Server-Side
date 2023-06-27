const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const cors = require('cors');

const blogController = require("./controllers/blog_controller");
const userController = require("./controllers/users_controller");
const sessionController = require("./controllers/session_controller");


let app = express()
const PORT = process.env.PORT || 3001;

app.listen(PORT,() => console.log(`Server is listening here: http://localhost:${PORT}`))

app.use(express.json())
app.use(cors())


app.use("/api/blogs", blogController);
app.use("/api/users", userController);
app.use("/api/sessions", sessionController);

app.get('/api/blogs', (req, res) => {
    res.json(post)
})

app.post('/api/blogs', (req, res) => {
    const post = req.body
    res.json({ message: `${post.title} was successfully added.` })
})

app.post('/api/blogs/:id', (req, res) =>{
    const user_comment = req.body
    const post_id = req.params.id
    const user_id = req.params.id
})

// app.put('/api/blogs/:id', (req, res) => {
//     const post = req.body
//     const post_id = req.params.post_id
//     res.json({ message: `${post.title} was successfully updated.` })
// })


if (process.env.NODE_ENV === 'production') {
    const path = require('path')
    app.use(express.static(path.join(__dirname, 'build')));
  
    app.get('/*', (req, res) => {
      res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
  }