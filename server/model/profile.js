const mongoose = require('mongoose');
const Profileschema = require('../migration/profile.json')
const profileSchema = new mongoose.Schema(Profileschema)

module.exports = mongoose.model("profiles",profileSchema)