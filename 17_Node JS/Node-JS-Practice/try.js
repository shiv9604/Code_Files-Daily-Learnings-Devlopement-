const mysql = require('mysql')

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:''
})

conn.connect((err)=>{
    if(err){
        console.log("Error Occured while connection")
    }
})



