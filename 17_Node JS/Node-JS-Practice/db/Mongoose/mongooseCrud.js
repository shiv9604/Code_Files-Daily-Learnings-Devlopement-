const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name:String
},{
    collection:'Users_data'
})
const url = 'mongodb://localhost:27017/Users';
mongoose.connect(url)

var User = mongoose.model('Users_data',userSchema)

async function getAllData(){
    let data = await User.find()
    console.log("All Data Fetched =>",data.length)
}

// getAllData()

async function insert(){
    let user = new User({name:'Mongoose',age:18})
    let result = await user.save()
    console.log("Result =>",result)
}
// insert()

async function update(){
    let update = await User.updateOne({name:'Mongoose'},{$set:{name:'Mongo DB'}})
    console.log("User updated =>",update)
}

// update()

async function deleteOne(){
    let deleting = await User.deleteMany({name:'Mongoose'})

    console.log("Deleting Mongo DB =>",deleting)
}

// deleteOne()







