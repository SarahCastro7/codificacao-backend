import express from 'express';
import petRoutes from './routes/petRoutes.js';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('nao ta fuincionando n');
});

// mount pet routes at /pets
app.use('/pets', petRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

//BD > Services > Routes > pet.js