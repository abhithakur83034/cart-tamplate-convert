const productmodel = require("../model/productmodel");

const addProduct = async (req, res) => {
  // console.log("req.file:", req.file);
  console.log("req.body:", req.body);
  try {
    const image = req.file.filename;
    const { name, price, quality, select, quantity } = req.body;

    const productData = { image, name, price, quality, select, quantity };

    const product = new productmodel(productData);
    const result = await product.save();
    const responseData = {
      message: "Product added successfully",
      status: "success",
    };

    res.status(201).json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const showProduct = async (req, res) => {
  try {
    const product = await productmodel.find(req.body);
    res.status(201).send(product);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

const findForUpdateProduct = async (req, res) => {
  try {
    const product = await productmodel.findOne({ _id: req.params.id });
    res.status(201).send(product);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Errorppppp");
  }
};

const UpdateProduct = async (req, res) => {
  try {
    const { name, price, quality, select, quantity } = req.body;
    const updateFields = {
      name,
      price,
      quality,
      select,
      quantity,
    };

    // Check if a new image file was provided in the request
    if (req.file && req.file.filename) {
      updateFields.image = req.file.filename;
    }

    const updatedProduct = await productmodel.updateOne(
      { _id: req.params.id },
      { $set: updateFields }
    );

    if (updatedProduct.nModified === 0) {
      return res.status(404).send("Product not found");
    }

    res.status(200).send("Product updated successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};



const deleteProduct = async (req, res) => {
  try {
    const product = await productmodel.deleteOne({ _id: req.params.id });
    res.status(201).send(product);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  addProduct,
  showProduct,
  findForUpdateProduct,
  UpdateProduct,
  deleteProduct,
};
