const express = require('express');
const { getItems } = require('../controllers/itemsController');

const router = express.Router();

router.get('/items', getItems);

module.exports = router;
