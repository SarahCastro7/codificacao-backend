import express from 'express';
import pizzasRouter from './routes/pizzasRoutes.js';

const app = express();
const PORT = 3000

app.use(express.json())

app.get('/' , (req,res) => {
    res.json ('a life poderia ser uma strawberry sim!')
})

app.use("/pizzas", pizzasRouter)

app.listen(PORT, () => {
    console.log(`O servidor está rodando em http://localhost:${PORT}`);
})