const mongoose = require('mongoose');
const addressschema = require('../migration/address.json')
const AddressSchema = new mongoose.Schema(addressschema)

module.exports = mongoose.model("addresses",AddressSchema)