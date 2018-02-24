const express = require("express");
const path = require("path");
// this is our production server for servimg index.html and bundle
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser')
const getKeyWords = require('./getKeywords.js')

const PORT = 3000;


// parse application/json
app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
  next();
})

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

// temporary route to transfer over data from browser.json to database
app.get('/db', (req, res, next) => {
  // fs.readFile... and then loop
})

app.get('/:word', (req, res, next) => {
  // with req.params.word search the database for compatibility of that word
})


// client will send another object of keywords
// such as { 'const': true, '() => ': true } when the user fills out the
// text box and presses submit
// server will send back the browser compatibility of the input
// app.post('/keywords', getKeyWords.checkFiles, getKeyWords.initialScrape, getKeyWords.getVersions, getKeyWords.getCompatibility, getKeyWords.parseCode);



app.listen(PORT, (err)=>{
  if (err) console.log('error')
  else console.log('server started on ', PORT)
})
