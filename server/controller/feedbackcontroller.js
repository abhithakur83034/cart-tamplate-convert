const Feedback = require("../model/feedbackmodel");

const usersfeedback = async (req, res) => {
    console.log(req.body)
  const { feedback, userId, username, useremail } = req.body;

  try {
    let existingFeedback = await Feedback.findOne({ userId });

    if (!existingFeedback) {
      existingFeedback = new Feedback({
        feedback,
        userId,
        username,
        useremail,
      });
    } else {
      existingFeedback.feedback = feedback;
    }

    await existingFeedback.save();

    res.json({ userfeedback: "Feedback saved/updated successfully" });
  } catch (err) {
    console.error("Error saving/updating feedback:", err);
    res.status(500).json({ error: "Error saving/updating feedback" });
  }
};

const showfedback = async (req, res) => {
  try {
    const show = await Feedback.find(req.body);
    res.status(201).send(show);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  usersfeedback,
  showfedback,
};
