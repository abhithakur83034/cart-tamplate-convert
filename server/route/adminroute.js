const express = require('express');

const adminController = require('../controller/Admincontroller')

const router = express.Router();

router.post("/adminlogin",adminController.adminLogin)
router.get("/adminshow",adminController.adminshow)


module.exports = router;