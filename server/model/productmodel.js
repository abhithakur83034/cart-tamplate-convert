const mongoose = require('mongoose');
const Productschema = require('../migration/productschema.json')
const productSchema = new mongoose.Schema(Productschema)

module.exports = mongoose.model("products",productSchema)