import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/showfeedback.css'
const Showfeedback = () => {
  const [feedbackData, setFeedbackData] = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:4500/fb/showfeedback")
      .then((res) => {
        console.log(res.data);
        setFeedbackData(res.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  return (
    <main id="main" className="main">
      <h1>Show Feedback</h1>
      <ul className="feedback-list">
        {feedbackData.map((feedback, index) => (
          <li key={index} className="feedback-item">
            <strong>Name:</strong> {feedback.username}<br />
            <strong>Email:</strong> {feedback.useremail}<br />
            <strong>Feedback:</strong> {feedback.feedback}<br />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Showfeedback;
