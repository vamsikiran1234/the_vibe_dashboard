const items = require('../data/items');

const getItems = (req, res) => {
  try {
    const { q } = req.query;

    // If no query, return all items
    if (!q || q.trim() === '') {
      return res.json(items);
    }

    // Filter by name or category (case insensitive)
    const searchTerm = q.toLowerCase().trim();
    const filteredItems = items.filter(item => 
      item.name.toLowerCase().includes(searchTerm) || 
      item.category.toLowerCase().includes(searchTerm)
    );

    res.json(filteredItems);
  } catch (error) {
    res.status(500).json({ error: 'Server error', message: error.message });
  }
};

module.exports = { getItems };
