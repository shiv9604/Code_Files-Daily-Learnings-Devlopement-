const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const db_name = 'Users'
const collection = 'Users_data'

const client = new MongoClient(url)
// let col_obj;

async function connect() {
    let connection = await client.connect()
    // console.log("Connection =>",connection)

    let db = connection.db(db_name)
    let col_obj = db.collection(collection)
    return col_obj
}

module.exports = connect