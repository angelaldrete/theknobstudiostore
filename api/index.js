const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors(
  {
    origin: 'https://theknobstudio.vercel.app',
    optionsSuccessStatus: 200
  }
));

app.use('/assets/img', express.static(path.join(__dirname, 'public/assets/img')));
app.use('/assets/audio', express.static(path.join(__dirname, 'public/assets/audio')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;