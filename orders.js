const express = require('express');
const router = express.Router();
const { createOrder } = require('../services/smmApi');

router.post('/new', async (req, res) => {
  const { service, link, quantity } = req.body;
  try {
    const result = await createOrder(service, link, quantity);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
