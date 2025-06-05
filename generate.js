
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt } = req.body;
  if (!prompt || prompt.trim() === '') {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    const fakeGeneratedCode = `// You asked for: ${prompt}\n\nfunction buildApp() {\n  console.log('This is your generated app based on: ${prompt}');\n}`;
    res.status(200).json({ result: fakeGeneratedCode });
  } catch (err) {
    console.error('Error generating:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}
