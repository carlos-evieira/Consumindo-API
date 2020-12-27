const cors = require('cors')
const express = require('express')
const app = express()


app.use(cors())

//OPC2 -  Consumindo APi do Front-End com dados fornecidos no back-end

app.get ('/', (req,res)=> {
    
    try {
        return res.json([
        {name:'Carlos Eduardo Vieira'},
        {name: 'Mônica Muniz vieira'}
    ])
    } catch (error) {
        console.error(error)
    }
})

app.listen('4567')