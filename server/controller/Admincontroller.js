require("dotenv").config();
const jwt = require("jsonwebtoken");
const secret_key = process.env.SECRET_KEY;

const adminemail = process.env.ADMIN_EMAIL;
const adminpassword = process.env.ADMIN_PASSWORD;
const name = "abhishek";
const mobile = "8795932345";
const country = "India";
const address = "A108 Adam Street,Lucknow, NY 226022";
const ADMIN = { adminemail, adminpassword, name, mobile, country, address };
// console.log(admin)

const adminLogin = async (req, res) => {
  //     // console.log(req.body)
  try {
    if (
      ADMIN.adminemail == req.body.email &&
      ADMIN.adminpassword == req.body.password
    ) {
      // return res.status(201).json({
      //     adminemail,
      //     adminpassword
      // })
      const admintoken = jwt.sign({ ADMIN }, secret_key, { expiresIn: "2h" });
      res.send({
        ADMIN,
        admintoken,
      });
    } else {
      console.log("can't find admin");
      res.status(500).json({ message: "can't find admin" });
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  adminLogin,
};
