const express = require('express');
const app = express();
const {getEntities} = require('./data');

app.get('/', (_, res) => {
  res.status(200).send('OK');
});

app.get('/entity/:id', (req, res) => {
  const entityId = req.params.id;
  const entities = getEntities();

  const record = entities.find((entity) => entity.id === parseInt(entityId));

  if(record) {
    res.json(record);
  } else {
    throw new Error('Record not found');
  }
});

module.exports = app;
