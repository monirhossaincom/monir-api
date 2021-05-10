import express from 'express';
import buyHome from './data/buyHome.js';

const app = express();

// Route Root
app.get('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.send('API is running...');
});

// buy-home API
app.get('/api/buy-home', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.json(buyHome);
});

const port = 5000;

app.listen(process.env.PORT || port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
