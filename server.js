const express = require('express');
const mongodb = require('mongodb');
require('dotenv').config();
const app = express();
const port = 3001;
const mongoClient = mongodb.MongoClient;

const uri = process.env.MONGO_URI;
const client = new mongoClient(uri);

app.get('/', (req, res) => {
  client.connect()
    .then(() => {
      res.json({ message: "Successfully connected to the database!" });
    })
    .catch(() => {
      res.status(500).json({ message: "Failed to connect to the database." });
    });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

