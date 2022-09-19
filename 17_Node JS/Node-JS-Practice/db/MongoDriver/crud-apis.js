
    const express = require('express')
    const app = express()

    const connection = require('./db/mongoConfig')
    const mongo = require('mongodb')

    // For Acessing the request body
    app.use(express.json());

    app.get('',(req,resp)=>{
        resp.send("<h1>home</h1>")
    })

    app.get('/data',async (req,resp)=>{
        let dbObj = await connection()
        let data = await dbObj.find().toArray()
        console.log("Data Fetched =>",data)
        resp.send(data)
    })
    
    app.get('*',(req,resp)=>{
        resp.send('Invalid URL')
    })

    app.post('/user',async (req,resp)=>{
        let dbObj = await connection()
        // let reqData = req.body
        // console.log("Data Recieved in Post=>",reqData)
        let insert = await dbObj.insertOne(reqData)
        resp.send(reqData)

    })

    app.put('/user/:name',async (req,resp)=>{
        let dbObj = await connection()

        let propertyToUpdate = req.params

        let dataToUpdate = req.body

        console.log("Query Params =>",propertyToUpdate)

        console.log("Data to update =>",dataToUpdate)

        let update = await dbObj.updateOne(propertyToUpdate,{$set:{...dataToUpdate}})

        console.log("Data Updated Resopnse =>",update)

        resp.send(dataToUpdate)
    })

    app.delete('/user/:id',async (req,resp)=>{
        
        console.log("Params =>",req.params.id)
        let condition = {
            _id:new mongo.ObjectId(req.params.id)
        }
        resp.send(condition)

        // deleting
        let dbObj = await connection()
        let deleting = await dbObj.deleteOne(condition)
        
        console.log("Condition For delete =>",condition)
        console.log("Deleted")
    })
    
    // router.use(filter)
    // app.use('/',router)
    app.listen(4800)



