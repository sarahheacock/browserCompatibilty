const express = require("express");
const path = require("path");
// this is our production server for servimg index.html and bundle
const app = express();

const PORT = 3000;

// app.use(express.static(path.join(__dirname, "../build")))
app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, "../build/index.html"))
})

app.get('/bundle.js', (req, res)=>{
  res.sendFile(path.join(__dirname, "../build/bundle.js"))
})

app.get('/styles.css', (req, res)=>{
  res.sendFile(path.join(__dirname, "../build/styles.css"))
})

app.listen(PORT, (err)=>{
  if (err) console.log('error')
  else console.log('server started on ', PORT)
})
