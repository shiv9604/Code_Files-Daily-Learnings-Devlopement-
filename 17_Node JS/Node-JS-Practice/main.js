
    const express = require('express')
    const app = express()
    const EventEmitter = require('events')
    const event = new EventEmitter()

    const mongoose = require('mongoose')
    const userSchema = new mongoose.Schema({
        name:String
    },{
        collection:'Users_data'
    })
    const url = 'mongodb://localhost:27017/Users';

    mongoose.connect(url)

    const User = mongoose.model('Users_data',userSchema)

    // For Acessing the request body
    app.use(express.json());


    event.on('count',()=>{
        console.log("Event Called...")
    })

    app.get('',(req,resp)=>{
        resp.send("<h1>home</h1>")
        event.emit('default')

    })

    app.get('/users',async (req,resp)=>{
        let data = await User.find()
        console.log("Data Fetched =>",data)
        resp.send(data)
        event.emit('get')
    })

    app.get('/users/:searchVal',async (req,resp)=>{
        console.log("Search Value =>",req.params.searchVal)
        let data = await User.find({
            "$or":[
                {"name":{$regex:req.params.searchVal}}
            ]            
        })
        console.log("Data Fetched =>",data)
        event.emit('getSearch')
        resp.send(data)
    })
    
    

    app.post('/user',async (req,resp)=>{
        let reqData = req.body
        // console.log("Data Recieved in Post=>",reqData)
        let insert = new User(reqData)
        let save = await insert.save()
        event.emit('post')
        resp.send(reqData)
    })

    app.put('/user/:name',async (req,resp)=>{
        let propertyToUpdate = req.params
        let dataToUpdate = req.body

        console.log("Query Params =>",propertyToUpdate)
        console.log("Data to update =>",dataToUpdate)

        let update = await User.updateOne(propertyToUpdate,{$set:{...dataToUpdate}})

        console.log("Data Updated Resopnse =>",update)
        event.emit('default')
        resp.send(dataToUpdate)
    })

    app.delete('/user/:id',async (req,resp)=>{

        console.log("Params =>",req.params.id)
        let condition = {
            _id:req.params.id
        }
        // resp.send(condition)

        // deleting
        let deleting = await User.deleteOne(condition)
        
        console.log("Condition For delete =>",condition)
        console.log("Deleted")
        event.emit('default')
        resp.send(deleting)
    })
    

    app.get('*',(req,resp)=>{
        resp.send('Invalid URL')
    })

    // router.use(filter)
    // app.use('/',router)
    
    app.listen(4800)



