const express = require('express');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 4000;
const routes = require('./routes');

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000'
};

app.use(express.json());
app.use(cors(corsOptions));
app.use('/entries', routes.entries);

app.get('/', function(req, res) {
  res.send('We On')
})

app.listen(PORT, () => {
  console.log(`You are now listening to ${PORT}`);
  
})