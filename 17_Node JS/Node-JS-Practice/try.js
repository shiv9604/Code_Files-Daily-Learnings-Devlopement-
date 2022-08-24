
    // const express = require('express')
    // const app = express()
    // const path = require('path')
    // const filter = require('./Middlewares/Filters')
    // const router = express.Router()
    // const dataDir = path.join(__dirname,'data/')

    // app.get('',(req,res)=>{
    //     res.send("<h1>home</h1>")
    // })

    // router.get('/data',(req,res)=>{
    //     res.sendFile(`${dataDir}/data.js`)
      
    // })
    // app.get('*',(req,res)=>{
    //     res.send('Invalid URL')
    // })
    
    // router.use(filter)
    // app.use('/',router)

    // app.listen(4800)
    
const connection = require('./db/mongoConfig')

async function getData() {
    let dbObj =  await connection()
    let data = await dbObj.find().toArray();
    console.log("Data =>",data)
}
getData()


async function insert(){
    let dbObj =  await connection()

    let inesrted = await dbObj.insertOne({name:'shiv2'})
    console.log("Inserted result =>",inesrted)
}

insert()










