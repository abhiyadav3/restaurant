const mongoose = require('mongoose');

const menuItems = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['Starter', 'Drink', 'Main Course', 'Dessert', 'Salad', 'Bread'],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    is_available: {
        type: Boolean
    },
    vegetarian: {
        type: Boolean
    }
})

const Menu = mongoose.model('Menu', menuItems);
module.exports = Menu;