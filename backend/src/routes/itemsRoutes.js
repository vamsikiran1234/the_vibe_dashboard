const express = require('express');
const { getItems } = require('../controllers/itemsController');

const router = express.Router();

// @route   GET /api/items
// @desc    Get all items or search items by name/category
// @access  Public
// @query   q (optional) - search term for filtering
router.get('/items', getItems);

module.exports = router;
