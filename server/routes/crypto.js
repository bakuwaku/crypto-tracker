const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/top', async (req, res) => {
  try {
    const response = await axios.get('https://api.coincap.io/v2/assets?limit=10');
    res.json(response.data.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch crypto data' });
  }
});

module.exports = router;