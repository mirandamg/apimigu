const {getProducts} = require('../dboperations')
const express = require('express')
//const dboperations = require('./dboperations')
const app = express()
const port = 3000

app.get('/', async (req, res) => {
  //res.send('Hello World!')
  const products = await getProducts()
  console.log(products);
  res.send(JSON.stringify(products))
})

app.listen(port, () => {
  console.log('Example app listening on port ${port}')
})


module.exports = app;