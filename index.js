var express = require('express')
var app= express()


var movies = require('./controllers/movies')


app.use('/movies', movies)


  
app.listen(5000,"0.0.0.0",()=>{console.log('connect to port number 5000')})