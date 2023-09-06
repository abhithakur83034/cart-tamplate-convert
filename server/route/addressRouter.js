const express = require('express');

const addressController = require('../controller/Addresscontroller')
const middleware = require('../middleware/middleware')

const router = express.Router();

router.post("/useraddress",middleware.verifyToken,addressController.address)


module.exports = router;