const userModel = require("../model/usermodel");
const jwt = require("jsonwebtoken");
const secret_key = process.env.SECRET_KEY;
const nodemailer = require("nodemailer");
// const crypto = require("crypto");
const bcrypt = require("bcrypt");

// const userRegister = async (req, res) => {
//   try {
//     const { name, mobile, email, password } = req.body;
//     const salt = crypto.randomBytes(16).toString("hex");
//     const hashedPassword = crypto
//       .pbkdf2Sync(password, salt, 10000, 64, "sha256")
//       .toString("hex");

//     const newUser = {
//       name,
//       mobile,
//       email,
//       password: hashedPassword,
//       salt,
//     };
//     const user = await userModel.create(newUser);
//     return res.status(201).json({ user });
//   } catch (error) {
//     console.error("Error in user registration:", error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// };

// const userLogin = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await userModel.findOne({ email });
//     console.log(user);

//     if (user && user.salt) {
//       const LoginPassword = crypto
//         .pbkdf2Sync(password, user.salt, 10000, 64, "sha256")
//         .toString("hex");

//       if (LoginPassword === user.password) {
//         const usertoken = jwt.sign({ user }, secret_key, { expiresIn: "2h" });
//         res.send({
//           user,
//           usertoken,
//         });
//       } else {
//         res.status(401).send({ result: "Invalid credentialssss" });
//       }
//     } else {
//       res.status(401).send({ result: "Invalid credentials" });
//     }
//   } catch (error) {
//     console.error("Error during user login:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// register============================================================

const userRegister = async (req, res) => {
  try {
    const image = req.file.filename;
    const { name, mobile, email, password, address, country, about } = req.body;
    // const data={image,name ,mobile,email, password, address, country, about}
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = {
      image,
      name,
      mobile,
      email,
      password: hashedPassword,
      address,
      country,
      about,
    };

    const user = await userModel.create(newUser);
    return res.status(201).json({ user });
  } catch (error) {
    console.error("Error in user registration:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

//login========================================================================
const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        const usertoken = jwt.sign({ user }, secret_key, { expiresIn: "2h" });
        res.send({
          user,
          usertoken,
        });
      } else {
        res.status(401).send({ result: "Invalid credentials" });
      }
    } else {
      res.status(401).send({ result: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error during user login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//find registered user=================================================

const registereduser = async (req, res) => {
  try {
    const user = await userModel.find(req.body);
    // console.log("from user fetch", user);
    res.status(201).send(user);
  } catch (error) {
    console.log(error);
  }
};

//delete user=============================================================
const deleteUsers = async (req, res) => {
  try {
    const user = await userModel.deleteOne({ _id: req.params.id });
    res.status(201).send(user);
  } catch (error) {
    console.log(error);
  }
};

//mail for reset password=========================================================

const sendResetPasswordMail = async (req, res) => {
  //   console.log("email", req.body);
  const { email } = req.body;
  if (!email) {
    res.status(401).send({ message: "please Enter Email Address" });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: process.env.EMAIL_SMTP,
      pass: process.env.PASSWORD_SMTP,
    },
  });

  try {
    const userfind = await userModel.findOne({ email });
    // token generate for reset password
    const token = jwt.sign({ _id: userfind._id }, secret_key, {
      expiresIn: "120s",
    });
    const mailOptions = {
      from: process.env.EMAIL_SMTP,
      to: email,
      subject: "Sending Email For password Reset",
      // text: `This Link Valid For 2 MINUTES http://localhost:3000/resetpassword/${userfind._id}/${setus ertoken.verifytoken}`,
      text: `<p>Hii, please click here to <a href="http://localhost:3000/resetpassword/${userfind._id}/${token}">Reset</a> your password</p>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("error", error);
        res.status(401).json({ status: 401, message: "email not send" });
      } else {
        console.log("Email sent", info.response);
        res.status(201).json({ status: 201, message: "Email sent Succsfully" });
      }
    });
    // }
  } catch (error) {}
};

//reset your password====================================================================

const resetpassword = async (req, res) => {
  try {
    const { password } = req.body;
    const { id, token } = req.params;
    const decoded = jwt.verify(token, secret_key);
    const hash = await bcrypt.hash(password, 10);

    await userModel.findByIdAndUpdate({ _id: id }, { password: hash });

    res.send({ status: "success" });
  } catch (error) {
    console.error("Error during password reset:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// const resetpassword = async (req, res) => {
//   try {
//     const { password } = req.body;
//     const { id, token } = req.params;
//     const decoded = jwt.verify(token, secret_key);

//      Generate a random salt and hash the new password
//     const salt = crypto.randomBytes(16).toString('hex');
//     const hashedPassword = crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512').toString('hex');

//      Update the user's password with the new hash and salt
//     await userModel.findByIdAndUpdate({ _id: id }, { password: hashedPassword, salt: salt });

//     res.send({ status: "success" });
//   } catch (error) {
//     console.error("Error during password reset:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

module.exports = {
  userRegister,
  userLogin,
  registereduser,
  deleteUsers,
  sendResetPasswordMail,
  resetpassword,
};
