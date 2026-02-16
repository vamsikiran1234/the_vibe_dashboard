require('dotenv').config();

const express = require('express');
const cors = require('cors');
const itemsRoutes = require('./routes/itemsRoutes');
const { notFound, errorHandler } = require('./middlewares/errorHandler');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Test Route
app.get('/', (req, res) => {
  res.status(200).json({ 
    success: true,
    message: 'Vibe Dashboard API Running 🚀',
    version: '1.0.0'
  });
});

// API Routes
app.use('/api', itemsRoutes);

// Error Handling Middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
