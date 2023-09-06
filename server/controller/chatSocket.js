const axios = require('axios');
require('dotenv').config();
const sendMessage = async (req, res) => {
  try {
    const userMessage = req.body.message;

    const apiKey = process.env.OPEN_API_KEY

    const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';

    const headers = {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    };

    const requestData = {
      prompt: userMessage,
      max_tokens: 50,
    };

    const response = await axios.post(apiUrl, requestData, { headers });

    if (!response.data || !response.data.choices || response.data.choices.length === 0) {
      console.error('Invalid or empty response from OpenAI API');
      res.status(500).json({ error: 'Invalid or empty response from OpenAI API' });
      return;
    }

    const botReply = response.data.choices[0].text;
    res.json({ message: botReply });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

module.exports = {
  sendMessage
};
