// This is a placeholder for a Notion webhook integration.
// You would deploy this as a serverless function (e.g., Vercel/Netlify) and call Notion API here.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  // Example: receive form data and push to Notion
  // const { name, email, message } = req.body;
  // await notion.pages.create({ ... });
  res.status(200).json({ ok: true });
}
