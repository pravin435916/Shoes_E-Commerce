const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('/api/NikeProducts', async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ products });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/api/NikeProducts', async (req, res) => {
  const { name, desc, img, gender, price, star, brand } = req.body;
  if (!name || !desc || !price) {
    return res.status(400).json({ error: 'Product name, description, and price are required' });
  }
  try {
    const newProduct = await Product.create({ name, desc, img, gender, price, star, brand });
    res.json({ success: true, msg : 'successfully added' });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/api/products/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});
router.delete('/api/products/:id', async (req, res) => {
    try {
      const deletedProduct = await Product.findByIdAndDelete(req.params.id);
      if (!deletedProduct) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json({ success: true, message: 'Product deleted successfully' });
    } catch (error) {
      console.error('Error deleting product:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
module.exports = router;
