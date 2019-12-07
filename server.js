if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require("express")
const path = require("path")
const app = express()
const morgan = require('morgan')

// MIDDLEWARES
app.use(morgan('dev'))
app.use(express.json())

// ROUTES
app.use('/api/characters', require('./src/routes/character'))
// app.use('/api/films', require('./src/routes/films'))
// app.use('/api/starships', require('./src/routes/starships'))
// app.use('/api/planets', require('./src/routes/planets'))
// app.use('/api/vehicles', require('./src/routes/vehicles'))
// app.use('/api/species', require('./src/routes/species'))

// JUST FOR DEMO PURPOSES, PUT YOUR ACTUAL API CODE HERE
app.get('/api/demo', (request, response) => {
  response.json({
    message: "Hello from server.js"
  })
})
// END DEMO

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')))
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })
}

const port = process.env.PORT || 8080
app.listen(
  port,
  () => { console.log(`API listening on port ${port}...`) }
)
