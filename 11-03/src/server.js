const express = require('express')
const app = express()
const port = 3000

let alunos = [ 
  { id: 1, nome: "amanda"},
  { id: 2, nome: "biao" },
  { id: 3, nome: "sarah" },
  { id: 4, nome: "thaylao" }
 ]
app.get('/alunos/getAll', (req, res) => {
  res.json({
    sucess: true,
    data: alunos
  })
})

let frutas = [  
  { id: 1, nome: "maçã" },
  { id: 2, nome: "banana" },
  { id: 3, nome: "laranja" },
  { id: 4, nome: "uva verde" }
]

app.get('/frutas/getAll', (req, res) => {
  res.json({
    sucess: true,
    data: frutas
  })
})

app.get('/', (req, res) => {
  res.send('vaaaaai, nao vai, vaaaaaaaai, nao')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
