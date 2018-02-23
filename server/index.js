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

// called on ComponentDidMount so that the frontend know what words to parse out
app.get('/keywords', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send({
    'const': true,
    'let': true,
    '() => ': true
  })
})

// client will send another object of keywords
// such as { 'const': true, '() => ': true } when the user fills out the
// text box and presses submit
// server will send back the browser compatibility of the input
app.post("/keywords", (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  res.send([
    { word: 'total', chrome: 100, IE: 98},
    { word: '() =>', chrome: 100, IE: 98},
    { word: 'const', chrome: 100, IE: 99}
  ])
})

app.listen(PORT, (err)=>{
  if (err) console.log('error')
  else console.log('server started on ', PORT)
})
