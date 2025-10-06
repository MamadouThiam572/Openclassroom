const express = require('express');
const bodyParser = require('body-parser');
const application = express();
const mongoose = require('mongoose');
require('dotenv').config();
const Product = require('./models/Product');

mongoose.connect(process.env.DB_URI,
  { useNewUrlParser: true,
    useUnifiedTopology: true 
  })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));


application.use(express.json());

application.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

application.use(bodyParser.json());

application.post('/api/products' ,(req, res, next) => {
delete req.body._id;
const product = new Product({
...req.body 
});
product.save()
.then(() => res.status(201).json({ product: product }))
.catch(error => res.status(400).json({error}));
});

application.get('/api/products/:id', (req, res, next) => {
Product.findOne({_id: req.params.id})
.then(product => res.status(200).json({ product: product }))
.catch(error => res.status(400).json({error}));
});

application.get('/api/products', (req, res, next) => {
Product.find()
.then(products => res.status(200).json({ products: products }))
.catch(error => res.status(400).json({error}));
});

application.put('/api/products/:id', (req, res, next) => {
Product.updateOne({ _id: req.params.id}, { ...req.body, _id: req.params.id })
.then(() => res.status(200).json({ message: 'Modified!' }))
.catch(error => res.status(400).json({  error }));
});

application.delete('/api/products/:id', (req, res, next) => {
Product.deleteOne({ _id: req.params.id})
.then(() => res.status(200).json({message: 'Deleted!'}))
.catch(error => res.status(400).json({ error }));
});


module.exports = application;
