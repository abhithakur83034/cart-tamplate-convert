const UserModel = require("../model/usermodel");

const updateProfile = async (req, res) => {
  try {
    // Find the user by their unique identifier (e.g., user ID)
    const userId = req.params.id;

    // Create an object to hold the fields you want to update
    const updateFields = {};

    // Check and update each field individually
    if (req.file.filename !== undefined) {
      updateFields.image = req.file.filename;
    }

    if (req.body.name !== undefined) {
      updateFields.name = req.body.name;
    }

    if (req.body.mobile !== undefined) {
      updateFields.mobile = req.body.mobile;
    }

    if (req.body.email !== undefined) {
      updateFields.email = req.body.email;
    }

    if (req.body.password !== undefined) {
      updateFields.password = req.body.password;
    }

    if (req.body.address !== undefined) {
      updateFields.address = req.body.address;
    }

    if (req.body.country !== undefined) {
      updateFields.country = req.body.country;
    }

    if (req.body.about !== undefined) {
      updateFields.about = req.body.about;
    }

    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      {
        $set: updateFields, 
      },
      {
        new: true, // Return the updated user data
        runValidators: true, // Apply model's validation rules to the update
      }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  updateProfile,
};
