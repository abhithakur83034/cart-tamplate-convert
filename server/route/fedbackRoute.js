const express = require('express');

const feedbackController = require('../controller/feedbackcontroller');
const middleware = require('../middleware/middleware');


const router = express.Router();

router.post('/feedback',feedbackController.usersfeedback);
router.get('/showfeedback',feedbackController.showfedback);


module.exports = router;