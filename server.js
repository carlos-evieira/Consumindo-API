const cors = require('cors')
const express = require('express')
const app = express()
const axios = require('axios')

app.use(cors())


// OPC2 -  consumindo API do back-end  usando API externa 

app.get ('/', async(req,res)=> {
    
    try {
        // response é a resposta do axios MAS estamos tirando o data de dentro do response usando o "{data}" 
        const {data} = await axios('https://jsonplaceholder.typicode.com/users')
        
        return res.json(data)

    } catch (error) {
        console.error(error)
    }
   
})

app.listen('4567')