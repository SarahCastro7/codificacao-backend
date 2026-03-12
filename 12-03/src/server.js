const express = require('express')
const app = express()
const port = 3000

app.use(express.json()); 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// Rota de teste POST
// app.post('/usuarios', (req, res) => {
//     const dados = req.body; // Aqui chegam os dados do Thunder Client
//     console.log(dados);    // Aparece no seu terminal do VS Code
    
//     res.status(201).json({
//         mensagem: "usuário criado!",
//         usuario: dados
//     });

// });

// app.listen(3000, () => console.log("servidor ON na porta 3000"));

///////////////////



// let alunos = [ 
//   { id: 1, nome: "amandão"},
//   { id: 2, nome: "bião" },
//   { id: 3, nome: "sarão" },
//   { id: 4, nome: "thaylão" }
//  ]
// app.get('/alunos/getAll', (req, res) => {
//   res.json({
//     sucess: true,
//     data: alunos
//   })
// })



let alunos = [
  { id: 1, nome: "zili", idade: 12 },
  { id: 2, nome: "pitchula", idade: 21 },
  { id: 3, nome: "dafine", idade: 16 },
  { id: 4, nome: "skay", idade: 7 }
]

app.get('/alunos/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const aluno = alunos.find(a => a.id === id)
  if (!aluno) {
    return res.status(404).json({
      sucess: false,
      message: 'nao há registros desse aluno'
    })
  }
  res.send(aluno)
})

// let frutas = [  
//   { id: 1, nome: "maçã" },
//   { id: 2, nome: "banana" },
//   { id: 3, nome: "laranja" },
//   { id: 4, nome: "uva verde" }
// ]

// app.get('/frutas/getAll', (req, res) => {
//   res.json({
//     sucess: true,
//     data: frutas
//   })
// })

app.get('/', (req, res) => {
  res.send('vaaaaai, não foi')
})

//POST - criar um novo aluno 

app.post('/alunos', (req, res) => {
  const {nome, idade} = req.body

  app.use(express.json()); 

  if (!nome || !idade) {
    return res.status(400).json({
      sucess: false,
      message: 'nome e idade sao obrigatorios'
    })
  }

  const novoAluno = { 
    id: alunos.legth + 1,
    nome, 
    idade
  }

  alunos.push(novoAluno)
  res.status(201).json ({
    sucess: true,
    message: 'aluno novo',
    data: novoAluno
  })

 })
