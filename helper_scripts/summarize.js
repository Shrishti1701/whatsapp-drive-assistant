const axios = require('axios');

async function summarizeText(text) {
  const res = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: `Summarize in 3 bullet points:\n\n${text}` }],
      temperature: 0.3
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    }
  );
  return res.data.choices[0].message.content.trim();
}

module.exports = { summarizeText };
