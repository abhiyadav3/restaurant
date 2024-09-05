const express = require('express');
const router = express.Router();
const Menu = require('./../models/Menu');

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newMenuItem = new Menu(data);

        const response = await newMenuItem.save();
        console.log('Data Saved Successfully');
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

router.get('/', async (req, res) => {
    try {
        const menuItems = await Menu.find();
        console.log("Data fetched successfully");
        res.status(200).json(menuItems);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

router.get('/:categoryType', async (req, res) => {
    try {
        const categoryType = req.params.categoryType;

        if (categoryType == 'Starter' || categoryType == 'Drink' || categoryType == 'Main Course' || categoryType == 'Dessert' || categoryType == 'Salad' || categoryType == 'Bread') {
            const response = await Menu.find({category: categoryType});
            console.log('Data fetched Successfully')
            res.status(200).json(response);
        } else {
            res.status(400).json({ error: 'Invalid category type' });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

module.exports = router;