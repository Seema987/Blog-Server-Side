const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
//const cors = require('cors');

const logger = require('./middlewares/logger.js')
const sessions = require('./middlewares/sessions.js')

const blogController = require("./controllers/blog_controller");
const userController = require("./controllers/users_controller");
const sessionController = require("./controllers/session_controller");


let app = express()
const PORT = process.env.PORT || 3001;

app.listen(PORT,() => console.log(`Server is listening here: http://localhost:${PORT}`))

app.use(express.json())
app.use(sessions)


app.use("/api/blogs", blogController);
app.use("/api/users", userController);
app.use("/api/sessions", sessionController);


if (process.env.NODE_ENV === 'production') {
    const path = require('path')
    app.use(express.static(path.join(__dirname, 'build')));
  
    app.get('/*', (req, res) => {
      res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
  }