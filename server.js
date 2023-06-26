const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
let app = express()
const PORT = process.env.PORT || 3001;

app.listen(PORT,() => console.log(`Server is listening here: http://localhost:${PORT}`))
app.use(express.json())

if (process.env.NODE_ENV === 'production') {
    const path = require('path')
    app.use(express.static(path.join(__dirname, 'build')));
  
    app.get('/*', (req, res) => {
      res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
  }