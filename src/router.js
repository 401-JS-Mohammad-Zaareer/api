'use strict';

const express = require('express');
const router = express.Router();

const Categories = require('./models/category');
const Products = require('./models/product');

router.get('/categories', async(req, res) => {
    const allCategories = await Categories.find({});
    res,status(200).json(allCategories);
});

router.post('/categories', async(req, res) => {
    const category = new Categories(req.body);
    const result = await category.save(req.body);
    res.status(201).json(result);
});

router.get('/products', async(req, res) => {
    const allProducts = await Products.find({});
    res,status(200).json(allProducts);
});

router.post('/products', async(req, res) => {
    const product = new Products(req.body);
    const result = await product.save(req.body);
    res.status(201).json(result);
});

module.exports = router;