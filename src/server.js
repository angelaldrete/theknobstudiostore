const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors(
  {
    origin: 'https://theknobstudio.vercel.app',
    optionsSuccessStatus: 200
  }
));

app.use('/assets/img', express.static(path.join(__dirname, '../public/assets/img')));
app.use('/assets/audio', express.static(path.join(__dirname, '../public/assets/audio')));

module.exports = app;