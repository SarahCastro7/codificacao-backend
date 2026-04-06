import express from 'express';
import frutasRoutes from './routes/frutasRoutes.js';

const app = express()
const port = 3000;

app.use(express.json())
app.use('/frutas', frutasRoutes)

app.get('/' , (req, res)=> {
    res.send('ja pode dormir?')
})

app.listen(port, () => {
    console.log(`ta rodando em http://localhost:${port}`)
})


//BD > Services > Routes > pet.js