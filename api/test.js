// Simpele test endpoint om te verifiëren dat Vercel functions werken
module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  return res.status(200).json({
    success: true,
    message: 'API werkt!',
    method: req.method,
    path: req.url,
    timestamp: new Date().toISOString()
  });
};

