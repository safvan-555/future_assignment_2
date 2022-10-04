var express = require('express')
var router = express.Router()
var midlewares=require('../midilewares/validator')


router.get('/get_movies', midlewares.validate(),function(req,res){
    res.json('movies')
})


router.post('/create',midlewares.validate(),function(req,res){
    res.json('movies')
})

module.exports=router
