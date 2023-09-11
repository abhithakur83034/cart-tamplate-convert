const express = require('express');

const contactController = require('../controller/contactController');
const middleware = require('../middleware/middleware');


const router = express.Router();

router.post('/contacts',contactController.addcontact);


module.exports = router;