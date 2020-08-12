const nunjucks = require( 'nunjucks' )
const path = require( 'path' )

const routes = require( './routes/routes.js' )

const express = require( 'express' )
const app = express()


// Configurar nunjucks
nunjucks.configure( path.join( __dirname , '/../public/pages' ) , { 
  express: app,
  noCache: true
} )

// Dados do req.body
app.use( express.static( path.join( __dirname , '/../public/' ) ) ) // Configurações dos arquivos státicos

app.get( '/', routes )
app.get( '/terminal', routes )
app.get( '/about', routes )
app.get( '*', routes ) // Esta rota deve sempre ser a última!

module.exports = app