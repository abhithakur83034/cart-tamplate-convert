const express = require("express");

const multer = require('multer');
const userController = require("../controller/Usercontroller");

const router = express.Router();


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



router.post("/register",upload.single('image'), userController.userRegister);
router.post("/login", userController.userLogin);
router.get("/alluser", userController.registereduser);
router.delete("/delete/:id", userController.deleteUsers);






router.post("/resetoldpassword",userController.sendResetPasswordMail);
router.post("/resetpassword/:id/:token",userController.resetpassword);

module.exports = router;
