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
  res.render('index')
})

app.get('/posts', (req, res) => {
  res.render('posts')
})

//404  error (not found)
app.use((req, res) => { // middleware
  res.send('Página não encontrada!')
})



//Executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))