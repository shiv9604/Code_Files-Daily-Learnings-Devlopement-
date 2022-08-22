
const express = require('express')
const app = express()
const path = require('path')

let dataDir = path.join(__dirname,'data/')

app.get('',(req,res)=>{
    res.send("<h1>home</h1>")
})

app.use(express.static(dataDir))

app.listen(4800)







