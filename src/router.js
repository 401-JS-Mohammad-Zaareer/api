'use strict';

const express = require('express');
const router = express.Router();

const Categories = require('./models/category');
const Products = require('./models/product');

router.get('/categories', async(req, res) => {
    const allCategories = await Categories.find({});
    res.status(200).json(allCategories);
});

router.post('/categories', async(req, res) => {
    const category = new Categories(req.body);
    const result = await category.save(req.body);
    res.status(201).json(result);
});

router.put('/categories/:id', async(req, res) => {
    const id = req.params.id;
    const result = await Categories.findByIdAndUpdate(id, req.body, {
       new: true
   });
    res.status(200).json(result);
});
router.delete('/categories/:id', async(req, res) => {
    const id = req.params.id;
    const result = await Categories.findByIdAndDelete(id);
    res.status(200).json(result);
});

router.get('/products', async(req, res) => {
    const allProducts = await Products.find({});
    res.status(200).json(allProducts);
});
router.get('/products/:id', async(req, res) => {
    const id = req.params.id;
    const result = await Products.findById(id);
    res.status(200).json(result);
});

router.post('/products', async(req, res) => {
    const product = new Products(req.body);
    const result = await product.save(req.body);
    res.status(201).json(result);
});

router.put('/products/:id', async(req, res) => {
    const id = req.params.id;
    const result = await Products.findByIdAndUpdate(id, req.body, {
       new: true
   });
    res.status(200).json(result);
});
router.delete('/products/:id', async(req, res) => {
    const id = req.params.id;
    const result = await Products.findByIdAndDelete(id);
    res.status(200).json(result);
});

module.exports = router;