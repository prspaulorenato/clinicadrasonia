const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir arquivos estáticos do diretório raiz
app.use(express.static(path.join(__dirname)));

// Rota para a página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota para a página de agradecimento
app.get('/obrigado.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'obrigado.html'), (err) => {
    if (err) {
      console.error('Erro ao enviar obrigado.html:', err);
      res.status(404).send('Página não encontrada');
    }
  });
});

// Rota genérica para 404
app.use((req, res) => {
  res.status(404).send('Página não encontrada');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});