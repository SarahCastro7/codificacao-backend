import express from 'express';
import pet from './services/petRoutes.js';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('ta funcionando!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// BD > Services > Routes > server.js 