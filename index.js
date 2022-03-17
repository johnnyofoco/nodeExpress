const express = require('express')
const { listen } = require('express/lib/application')
const path = require('path')
const app = express()

//define o template engine
app.set('view engine', 'ejs')

// Definindo os arquivos estáticos
//app.use(express.static(path.join(__dirname, 'views')))

// Definindo os arquivos públicos
app.use(express.static(path.join(__dirname, 'public')))

//Rotas
app.get('/', (req, res) => {
  res.render('index', {
    title: "Home",
  })
})

app.get('/quemsomos', (req, res) => {
  res.render('quemsomos', {
    title: 'Quem Somos'
  })
})

app.get('/produtos', (req, res) => {
  res.render('produtos', {
    title: 'Produtos'
  })
})

app.get('/servicos', (req, res) => {
  res.render('servicos', {
    title: 'Serviços'
  })
})


app.get('/posts', (req, res) => {
  res.render('posts', {
    title: 'Posts'
  })
})

app.get('/contato', (req, res) => {
  res.render('contato', {
    title: 'Contato'
  })
})


//404  error (not found)
app.use((req, res) => {
  // middleware
  res.send('Página não encontrada!')
})

//Executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))
