const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// sendFile will go here
app.get('', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/link', (req, res) => {
  res.redirect('file://D:/Development/firefox-file-redirects/test.pdf');
});

app.listen(port);
console.log('Server started at http://localhost:' + port);
