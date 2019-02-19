const express = require('express');
const app = express();
const morgan = require('morgan');
const PORT = process.env.port || 3000;

app.use(morgan('dev'));
app.use(express.static('/client'));

app.listen(3000, () => {
  console.log(`Listening on port ${PORT}`);
});
