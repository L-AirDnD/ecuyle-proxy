const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const PORT = process.env.port || 3000;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../client')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
