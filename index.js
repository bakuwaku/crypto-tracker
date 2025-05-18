const express = require('express');
const cors = require('cors');
const path = require('path');

const cryptoRoutes = require('./public/crypto');
const portfolioRoutes = require('./server/public/portfolio');

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use('/api/crypto', cryptoRoutes);
app.use('/api/portfolio', portfolioRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
