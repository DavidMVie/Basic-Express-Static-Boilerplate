const express = require('express');

require('./db/mongoose');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'))

app.use(express.json());

app.listen(port, () => {
  console.log('Ole cloth ears is listening on port ' + port)
})