const mongoose = require('mongoose');
const Feedbackschema = require('../migration/feedbackschema.json')
const feedbacksSchema = new mongoose.Schema(Feedbackschema)

module.exports = mongoose.model("feedbacks",feedbacksSchema)