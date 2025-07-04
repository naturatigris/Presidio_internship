const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const PORT = 3000;

const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/db';

MongoClient.connect(MONGO_URL)
  .then(client => {
    const db = client.db();
    console.log('Connected to MongoDB');

    app.get('/', (req, res) => {
      res.send('API is connected to MongoDB!');
    });

    app.listen(PORT, () => {
      console.log(`Node.js API running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB:', err);
  });
