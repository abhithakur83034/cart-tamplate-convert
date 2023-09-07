require("dotenv").config();
const jwt = require("jsonwebtoken");
const secret_key = process.env.SECRET_KEY;

const adminemail = process.env.ADMIN_EMAIL;
const adminpassword = process.env.ADMIN_PASSWORD;
const id = '1'
const name = "abhishek";
const mobile = "8795932345";
const country = "India";
const address = "A108 Adam Street,Lucknow, NY 226022";
const about = " a person who is in charge of the operation of a network of computers, a website, a group of computer users, etc., and is able to make changes to it: Only admins can add people to the group chat or change the name of the group."
const ADMIN = { id,adminemail, adminpassword, name, mobile, country, address,about };
// console.log(admin)

const adminLogin = async (req, res) => {
  //      console.log(req.body)
  try {
    if (
      ADMIN.adminemail == req.body.email &&
      ADMIN.adminpassword == req.body.password
    ) {
     
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


const adminshow=async(req,res)=>{
  try {
    const admin = await ADMIN
    res.status(201).send(admin)
  } catch (error) {
    console.log(error)
  }
}
module.exports = {
  adminLogin,
  adminshow,
};
