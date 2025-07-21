const express = require('express');
const fetch = require('node-fetch');
const app = express();

// 🔐 Substitua por sua chave e CSE ID depois
const API_KEY = process.env.API_KEY;
const CSE_ID = process.env.CSE_ID;

app.use(express.static('src'));

app.get('/buscar', async (req, res) => {
  const query = req.query.query;
  const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${API_KEY}&cx=${CSE_ID}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));
    res.json(data);
  } catch (error) {
    console.error('Erro ao buscar:', error);
    res.status(500).json({ erro: 'Erro ao buscar dados' });
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});