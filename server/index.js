const express = require('express')
const { listen } = require('express/lib/application')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/sobre', (req, res) => {
  res.send('Sobre')
})

//404  error (not found)
app.use((req, res) => { // middleware
  res.send('Página não encontrada!')
})




const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))