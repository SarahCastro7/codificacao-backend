import express from 'express'
import route from './routes/estudantesRouter.js'

const PORT = 3000

const app = express()
app.use(express.json())
const porta = 3000

app.get("/", (req, res) => {
  res.send('nao foi, foi, nao foi n')
})

app.use("/estudantes", route)

app.listen(PORT, () => {
  console.log(`O servidor está rodando em http://localhost:${PORT}`)
})