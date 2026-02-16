require('dotenv').config();

const express = require('express');
const cors = require('cors');
const itemsRoutes = require('./routes/itemsRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Test Route
app.get('/', (req, res) => {
  res.json({ message: 'Vibe Dashboard API Running 🚀' });
});

// API Routes
app.use('/api', itemsRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
