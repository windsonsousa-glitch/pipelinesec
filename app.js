/**
 * app.js
 * Aplicação Node.js Express simples para o trabalho integrador
 * Pipeline Segura - UNIFOR
 */

const express = require('express');

const app = express();
const PORT = 3000;

/**
 * Rota principal que retorna o status da aplicação.
 */
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Pipeline Segura - UNIFOR' });
});

/**
 * Rota de healthcheck para verificar se a aplicação está em execução.
 */
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

/**
 * Inicia o servidor na porta 3000.
 */
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;
