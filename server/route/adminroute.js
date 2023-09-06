const express = require('express');

const adminController = require('../controller/Admincontroller')

const router = express.Router();

router.post("/adminlogin",adminController.adminLogin)


module.exports = router;