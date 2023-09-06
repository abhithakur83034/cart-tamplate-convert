const express = require('express');
const router = express.Router();
const chatController = require('../controller/chatSocket');

// Handle user messages
router.post('/sendMessage', chatController.sendMessage);

module.exports = router;
