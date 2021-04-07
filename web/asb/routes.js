const express = require('express');
const router = express.Router();
const MatchController = require('./controllers/MatchController');

router.get('/', MatchController.generate);

module.exports = router;
