const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const Product = mongoose.model('Product', new mongoose.Schema({
  
    name: {
      type: String,
      required: true
    },

    price: {
      type: Double,
      required: true
    },

    categorie: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'categorie'
      },

      stock: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Stock'
        }

  }));

  router.get('/', async (req, res) => {
    const products = await Product.find();
    res.send(products);
  });


  router.post('/', async (req, res) => {
    const { error } = validateProduct(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
  
    let Product = new Product(
    	{ 
    		name: req.body.name,
    		price: req.body.price

    	});

    Product = await Product.save();
    
    res.send(Product);
  });


  router.delete('/:id', async (req, res) => {
    const product = await product.findByIdAndRemove(req.params.id);
  
    if (!product) return res.status(404).send('The product with the given ID was not found.');
  
    res.send(product);
  });

  router.put('/:id', async (req, res) => {
    const { error } = validateproduct(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
  
    const product = await product.findByIdAndUpdate(req.params.id, 
    	{ 
    		name: req.body.name,
    		price: req.body.price

    	}, {
      new: true
    });
  
    if (!product) return res.status(404).send('The product with the given ID was not found.');
    
    res.send(product);
  });

  function validateproduct(product) {
    const schema = {
      name: Joi.string().min(3).required()
    };
  
    return Joi.validate(product, schema);
  }
  
  module.exports = router;
 

