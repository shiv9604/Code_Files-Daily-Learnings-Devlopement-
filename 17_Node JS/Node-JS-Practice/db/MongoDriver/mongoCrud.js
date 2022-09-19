const mongoose = require('mongoose')
const connection = require('../MongoDriver/mongoConfig')


async function insert(){
    let dbObj = await connection()
    let result = await dbObj.insertOne({name:'Mongoose',age:18})
    console.log("Result =>",result)
}
// insert()

async function update(){
    let dbObj = await connection()
    let update = await dbObj.updateOne({name:'Mongoose'},{$set:{name:'Mongo DB'}})
    console.log("User updated =>",update)
}

// update()

async function deleteOne(){
    let dbObj = await connection()
    let deleting = await dbObj.deleteOne({name:'Mongoose'})

    console.log("Deleting Mongo DB =>",deleting)
}

// deleteOne()

async function getAllData(){
    let dbObj = await connection()
    let data = await dbObj.find().toArray()
    console.log("All Data Fetched =>",data.length)
}

// getAllData()





