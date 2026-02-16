const items = require('../data/items');

const getItems = (req, res) => {
  try {
    const { q } = req.query;

    // If no query, return all items
    if (!q || q.trim() === '') {
      return res.status(200).json({
        success: true,
        count: items.length,
        data: items
      });
    }

    // Filter by name or category (case insensitive)
    const searchTerm = q.toLowerCase().trim();
    const filteredItems = items.filter(item => 
      item.name.toLowerCase().includes(searchTerm) || 
      item.category.toLowerCase().includes(searchTerm)
    );

    return res.status(200).json({
      success: true,
      count: filteredItems.length,
      query: q,
      data: filteredItems
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Server error',
      message: error.message
    });
  }
};

module.exports = { getItems };
