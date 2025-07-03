const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname)));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/video', express.static(path.join(__dirname, 'video')));
app.use('/GBProject', express.static(path.join(__dirname, 'GBProject')));

// Rotas para as páginas HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/programs', (req, res) => {
  res.sendFile(path.join(__dirname, 'programs.html'));
});

app.get('/story', (req, res) => {
  res.sendFile(path.join(__dirname, 'story.html'));
});

app.get('/structure', (req, res) => {
  res.sendFile(path.join(__dirname, 'structure.html'));
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});