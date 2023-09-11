const express = require('express');
const multer = require('multer');
const productController = require('../controller/Productcontroller');
const middleware = require('../middleware/middleware')
// const app = express();

const router = express.Router();
// router.use('/img', express.static("./uploads"));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const fileFilter = function (req, file, cb) {
  if (
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" 
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 10, 
  },
  fileFilter: fileFilter,
});

router.post('/addproduct', upload.single('image'), productController.addProduct);
router.get('/showproduct',productController.showProduct)
router.get('/update/:id',productController.findForUpdateProduct)
router.put('/update/:id', upload.single('image'),productController.UpdateProduct)
router.delete('/delete/:id',productController.deleteProduct)

module.exports = router;
