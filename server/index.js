const express = require('express');
const cors = require('cors');
const cryptoRoutes = require('./routes/crypto');
const portfolioRoutes = require('./routes/portfolio');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/crypto', cryptoRoutes);
app.use('/api/portfolio', portfolioRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));