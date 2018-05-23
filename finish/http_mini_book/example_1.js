const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send(`<a href="/test204">204</a> <a href="/test205">205</a> <a href="/test300">300</a>`)
})

const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`http://${host}:${port}`);
})