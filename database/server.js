const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 4000;
const app = express();

app.get('/', (req, res) => {
  res.send('Whats up shit is actually working')
})

app.listen(PORT, () => {
  console.log(`You are now listening to ${PORT}`);
  
})