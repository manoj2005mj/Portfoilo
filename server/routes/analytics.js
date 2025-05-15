const express = require('express');
const router = express.Router();

// In-memory visitor counter
let visitorCount = 0;

// Middleware to increment counter on each request
router.use((req, res, next) => {
  // In real-life scenarios, you would deduplicate IPs or use sessions
  visitorCount++;
  next();
});

// GET /api/analytics/visitors - returns current visitor count
router.get('/visitors', (req, res) => {
  res.json({ visitors: visitorCount });
});

module.exports = router;
