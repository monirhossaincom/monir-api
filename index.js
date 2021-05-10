import express from 'express';
import dotenv from 'dotenv';
import buyHome from './data/buyHome.js';

dotenv.config();
const app = express();

// Route Root
app.get('/', (req, res) => {
  res.send('API is running...');
});

// buy-home API
app.get('/api/buy-home', (req, res) => {
  res.json(buyHome);
});

const PORT = process.env.PORT || 5000;

app.listen(
  5000,
  console.log(`Server running on ${process.env.NODE_ENV} mode on ${PORT} `)
);
