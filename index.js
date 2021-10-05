const serverless = require('serverless-http');
const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Vamos que se puede')
  })
app.get('/version', function (req, res) {
  res.send('Serverless ci/cd v2!')
})

module.exports.handler = serverless(app);