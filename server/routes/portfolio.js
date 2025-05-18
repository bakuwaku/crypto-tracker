const express = require('express');
const router = express.Router();

let mockPortfolio = [];

router.post('/', (req, res) => {
  const { coin, amount } = req.body;
  if (!coin || !amount) return res.status(400).json({ error: 'Missing fields' });

  mockPortfolio.push({ coin, amount });
  res.json({ message: 'Coin added to portfolio', portfolio: mockPortfolio });
});

router.get('/', (req, res) => {
  res.json(mockPortfolio);
});

module.exports = router;