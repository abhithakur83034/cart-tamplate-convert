const mongoose = require('mongoose');
const contactschema = require('../migration/contact.json')
const ContactSchema = new mongoose.Schema(contactschema)

module.exports = mongoose.model("contacts",ContactSchema)