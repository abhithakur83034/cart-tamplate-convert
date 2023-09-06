const Feedback = require('../model/feedbackmodel');

const usersfeedback = async(req,res)=>{
    const { feedback, userId } = req.body;

    try {
        let existingFeedback = await Feedback.findOne({ userId });

        if (!existingFeedback) {
            existingFeedback = new Feedback({
                feedback,
                userId,
            });
        } else {
            existingFeedback.feedback = feedback;
        }

        await existingFeedback.save(); 

        res.json({ userfeedback: 'Feedback saved/updated successfully' });
    } catch (err) {
        console.error('Error saving/updating feedback:', err);
        res.status(500).json({ error: 'Error saving/updating feedback' });
    }
}


module.exports = {
    usersfeedback
};
