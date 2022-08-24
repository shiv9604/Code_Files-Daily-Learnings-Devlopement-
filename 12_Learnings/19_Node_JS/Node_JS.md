# Node JS (Backend)

We cant perform the buissness and major logic to the client side on the browser like front-end it can slowdown your application soo thats why we need backend to perform major tasks and our side and minimum and required only oprations should run on the client side soo the application will be faster.

A compiler which compiles the higher level language can convert the things into machine understandable code and perform the tasks.

Its serverside javascript runtime enviornment.

### Uses of Node Js

1. Node Js is mostly used for api.

2. We can connect the same database with Web App, Mobile App.

3. Node Js is super-fast for API.

4. You can be a full stack developer, you can become full stack developer.


### What api does

When we request an api call it will take data from the database and file server and give it to mobile app and web applications.

### Server :-
When we write the code like in example if we built an software like calculator and someone wants to use it but he is not able to create from scratch soo he will ask you to provide files for the software but we cannot provide our files to everyone who resides in the another corner of the world soo the concept of **Sever** comes up.

### Deployement :-
On the server we can put our local code files of our software called as deployement and with the specific adress now everyone can use it by acessing that adress from their browsers.

A serve converts your local code to global which can be used by rest of the world by acessing it on specific adress.

### How dow we get files from server :-
When we acess the adress of server it will send us the HTML and CSS files and Javascript as well and this files will get executed on the client side and thorugh the javascript it will give the call server for the data and at the server side the code will get executed and it will return data in the form of response.

### API and Cloud Services
Api stands for application programminhg interface but backend can be only called by the front-end soo if another backend code wants interact with another backend code which is built in another language here API comes out.

API's are language independant and platform independat means transfering data in some format which can be understandable with every programming language soo api returns the data in the form of json.

soo with the another backend language as well we can consume the data just by calling its functions and giving the required inputs and will get the data in the form of json.

<img src="./backend.png" style="width:100%;">


### Types of Api's :-

- **SOAP :-** Simple object acess protocol. 

It transfeer the data in small envolop which will be in the format in XML.


- **REST :-** Representational state transfer protocol.

    In REST api it will be designed for any resource which means create,retrive,update and delete.

    Any resource to be created in which we can create,retrive, update and delete can be performed.

    Methods : 
    - Get
    - Post
    - Put
    - Delete

**NPM (Node package Manager) :-**
    We can install packages and libraries with the help of npm.

- It will create node modules folder.
- It will create package.json and package.lock.json in which installed packages details and dependencies will be present there.


---

### undefined in node js

As node uses chromes v8 engine soo as we get undefined on the chromes javascript compiler we also get the undefined in the node js as well.

`undefined :-` when any line or statement doesnt return something it will say the undefined as well

### How Node js works

---

### Fundamentals of Node Js

- **How to import and export code :-**

    As we do import and export in the javascript it doesnt run in the nodejs as well bcoz its running the bit lower version javascript which doesnt support the import and exports like angular and react and all.

     - **Solution for imports and exports :-**

        In nodejs we can only export and import only objects.

        **Exporting object :-** We can export object by using `module.export={x:20,y:30}` and we can import this object in the project.

        **Importing object :-** We can import object by using `const filename = require(../app)` and we can use the variable as object in the applications as we can acess the values as well.

- **Filter :-** 

    Filter is array method with which we can filter the data from the array and return the array with the filtered values.

    **How to filter basic :-**
        we can return the value which we want in the return statement as like mentioned below.
    ```
    let a = [1,2,3,4,5]

    let filtered = a.filter((item)=>{
        return item===3
    })
    console.log(filtered) // returns 3
    ```

### Core Modules

Core modules are the modules are predefined modules where we dont need to write it from scratc. like ex : `fs,console,buffer,http,etc`.

- **Global Module :-** The modules we dont need to import and we can use them without importing is called as global modules.

- **Non-Global Module :-** The modules we need to import it before using it is called as non-global modules.

- **Directory and files :-**
    - `__dirname :-`  it will returns the directory path.
    - `__filename :-`  it will returns the files which are mentioned in the directory.

- **Howt to import module with specific function :-**

    Yes we can import the specific function from the module as like mentioned below.

    `let fsWrite = require('fs').writeFileSync` And we can use it.

### Basic Server and Output on browser

We can create server with the help of http module.

- First we need to import the http and store it in variable like `const http = require('http')`

- Then we have `createServer(req,res).listen(port)` this function will create server which will be running on `localhost:4500/` and `createServer()` will take a call back function the first param will be `request` and second will be `response`.

- Then we can write on the server with the help of `response.write()` function.

- And at the end we need to tell the node js as well where to stop soo we have `response.end()` so it will end the process over there.


```
const http = require('http')

http.createServer((req,resp)=>{
    resp.write("Hello World");
    resp.end()
}).listen(4800);

// This will create server on localhost:4800 port and will show what we written on it.
```

**Most Imp :-** When we make changes in our code will not show on the server we need to rerun the our nodejs server for it.

### Package.json

Package.json holds all the packages information and project information and detials about your project and some commands as well about your project.

**Its most important file of project which should not be deleted never. Else the project will be destroyed.**

- **How to create package.json :-** We can create package.json with the command `npm init` soo it will ask you for project detials and it will create package.json.

- **How to create node modules and package.lock.json :-** Whenever we install any node package in our project package.lock.json and node modules folder will be created.

- `package.lock.json :-` package.lock.json file holds the detial information of packages which you installed in your project and if its deleted whenever we do npm install it will be created again.

- `node modules :-` It will hold the folders of the packages and npm will  automatically install its related and dependant packages as well which will be stored in the node modules folder itself.

- **How to ignore node modules while pushing to github :-** For skipping the node modules folder while pushing the project on github or bitbucket we need to create .gitignore file and in that we need to do `/node modules` soo it will ignore all the node modules folder.

### NodeMon
Nodemon is the node package which will used for time saving purpose and which will work as live reload, we dont need to rerun the files again and again it will do it automatically.

 - **Installation :-** `npm i nodemon`

 - **Use :-** Before we used to use the `node filename` soo rather than it we can use now `nodemon filename` soo it will run the server with the nodemon with live reload.


### Static Api

We need to create the api with the `http module` and `createServer` function.

**Most Imp :-** We need to stringify the whatever the data will be we need to stringify it first and then we can use it in `response.write()`. 
 
- First we need to create server with http module.
```

http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'application\json'})
    res.write(JSON.stringify(dt));
    res.end();
}).listen(4800)
```

- Then we need to write headers like `res.writeHead(200,{'content-type':'application\json'})`


- Then we need to use `response.write(stringified data)`.

ex : 
```
// data File

let data = [{ name: "Shiv", age: "18" },{ name: "Shiv", age: "18" },{ name: "Shiv", age: "18" },{ name: "Shiv", age: "18" },{ name: "Shiv", age: "18" }];

module.exports = data;


// main file
const http = require("http");

let dt = require('./data');

http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'application\json'})
    res.write(JSON.stringify(dt));
    res.end();
}).listen(4800)
```

### Input From Command line

We can grab input from the command line with the help of `process` object with the help of `process.argv` which returns an array of `node.exe path` and `current dir path` and the things we put further of run command that things will be appended in this array.

```
let input = process.argv
console.log(inupt) // returns an array with node path, and current file path and further the inputs.
```

### File System

File system is the module in the node js which is usefull for creating, reading, writing, deleting files in the current directory.

**How to use :-**

- import file system like `const fs = require('fs')` and we can use its internal functions for the oprations.

**Fs Oprations :-**

- **create File :-** 
    
    `fs.writeFileSync(name,content)` It will checks for the file availability and if not then it creates new file and it appends the content in it.

- **create with folder path :-** 
    
    `fs.writeFileSync(path+fileName,content)` this will create the file inside directory which is mentioned.

- **Read File :-**

    `fs.readFile(dir/file,'utf8',(err,res)=>{console.log(res)})` this will read the file in ut8 format.

- **Append Data in file :-**    

    `fs.appendFile(dir/file,data,(err)=>{if(!err){console.log("Data Appended")}})` this will append the file and this will only have one parameter in its callback which is err and we need to show the sucess massage on it.

- **Rename File :-**

    `fs.rename(dir/file,dir/newfilename,(err)=>{if(!err){console.log("File Renamed")}})` This also takes only one parameter in its callback which is err and we need to show the sucess massage on it.


- **Read Directory :-** 

    `fs.readdir(path,(err,res)=>{console.log(res)})` this will take path as first arguement and a callback as the sec parameter in which first param will be error and sec will be response.

    This will return an array of file names.

### Path

Path is nodejs's core module which is very usefull for the directory creating, returning paths for the required oprations.

**How to get path of specific folder :-**

`__dirname` returns your current directory but if you want to create the files inside the folder then you need to get the path of that folder first and than only we can create the files in it.

For getting path we have `path.join(dir,foldername)` which returns the path to that folder and we can create file inside it as like mentioned below.

```
// Foldername is Data which is created manually

const path = require('path')
const dataPath = path.join(__dirname,'data/') // returns dir/folder/

// create file inside that folder wiht fs
fs.writeFileSync(filesPath+'dummy.js','let data = {name:"Shiv",age:18}')

```

### Express Js

Express is the node js framework which helps us to create api's in less time and to save our time rather than writing api's in scratch node js.

Genrally Express simplifies our work.

**How to use Express :-**

- Import express `const express = require('express')`

- Create instance of `express()` `const app = express()`

**Fundamentals of express :-**

- **starting server :-**    

    As previously we used to start the server with the help of `http` module with `createServer()` method we can do the same here with `app.listen(port)`.

- **Creating Calls with routes :-**    

    We can create requests as like mentioned below.

    - **Strucure of calls and routes :-**

        ```
        
        app.get(route,callback(req,res)=>{
            res.send(data)
        })
        ```

    - **Created Server and Some basic api calls :-**
        ```
        const express = require('express')
        const app = express()

        app.get('/home',(req,res)=>{
            res.send("home")
        })

        app.get('/about',(req,res)=>{
            res.send("about")
        })

        app.get('/services',(req,res)=>{
            res.send("Services")
        })

        app.get('/contact',(req,res)=>{
            res.send("contact")
        })

        app.listen(4800)
        ```
- **Render HTML on browser :-**

    Through the node Js we can render html as well on the browser by sending html as a string in the resonse.

    ```
    // This will be rendered as h1 tag of html  

    app.get('/home',(req,res)=>{
    res.send("<h1>home</h1>")
    })
    ```
- **Acess Server Folder Files through browser :-**

    We can directly acess the server files which for the acessible directory we provided.

    We can do that with the help of `app.use(express.static(dir))` and by this we can enter the filename in the url to hit and the file will be rendered on the browser.

    ```
    const express = require('express')
    const app = express()
    const path = require('path')

    let dataDir = path.join(__dirname,'data/')

    app.get('',(req,res)=>{
        res.send("<h1>home</h1>")
    })

    app.use(express.static(dataDir))

    app.listen(4800)
    
    ```

### Send File without extension with express

Above as we mentioned with the help of `express.static(dirname)` we needed to use the filenames with extensions soo, as its not a good practice we can hendle the thing with the help of `app.sendFile(path/filename)` as like mentioned below.

```
const express = require('express')
const app = express()

let dataDir = path.join(__dirname,'data/')

app.get('/data',(req,res)=>{
    res.sendFile(`${dataDir}/data.js`)
})
// app.use(express.static(dataDir))

app.listen(4800)
```

### 404 routing in expressJs

404 page is the page which appears on the hitting of invalid url and that can be done by mentioning `app.get('*',(req,res)=>{})`.

This will Route to the page or the response which we have sent on the 404 page.

```
const express = require('express')
const app = express()

 app.get('*',(req,res)=>{
        res.send('Invalid URL')
    })
```

### Middleware in expressJs (Global - For all Routes)

Middle ware is the intermediator of browser and the server which process the things as per the requirement before fullfilling the response like checking age, uesr login and all.

Middle ware is the function with the 3 params, `(req,res,next)` in which `req, and res` are request and response as usual and `next()` proceeds the request.

```
  const ageFilter = (req,res,next)=>{
        if(req.query.age==undefined){
            res.send("Please provide your age.")
        }
        else if(req.query.age<18){
            res.send('You Cannot acess this url, as your age is not 18+.')
        }
        else{
            next()
        }
    }
    app.use(ageFilter)
```

### Route Level Middleware

Route level middleware is where we apply middlewares for the perticular routes only and it will not be applied as global middleware.

For creating the route level middleware we need to pass the middlewear in the routes as an arguement after route defination and before callback.


```
const ageFilter = (req,res,next)=>{
    if(req.query.age==undefined){
        res.send("Please provide your age.")
    }
    else if(req.query.age<18){
        res.send('You Cannot acess this url, as your age is not 18+.')
    }
    else{
        next()
    }
}
 app.get('/data',filter,(req,res)=>{
        res.sendFile(`${dataDir}/data.js`)
      
    })

```
We can create the middlewares in the another directory as well, we need to import `const filter = require('./Middlewares/Filters')` and export the middlewear from the file with the help of `module.exports = ageFilter`.

### Middleware for group of routes.

We can't apply the middlewear for the every route soo we need to group the route and we need to apply the middlewear for the route group.

**How to create group routes :-**

- create the router with `const router = express.Router()` which can be used for grouping of routes.

- create the routes with the help of `router.get(path,callback)` rahter than `app.get(path,callback)`.

- use the middleware for the custom router like `router.use(middleware)` it will apply the middleware to the defined routes with it.

- use the router for the app soo it can recognize the routes made with router. `app.use('/',router)`. 

The above step will apply the middleware for the group routes only which are created by the router itself.



### MongoDb

MongoDb is the NOSQL database in which the data is stored in the format of objects and not in rows and columns.

There are no tables in the mongoDb rather than it have collections which are act as the tables in the mongoDb.


### MongoDb compass

MongoDb compass is the gui tool for the mongoDb as like php myadmin form which we can manipulate the databases, collections and all.

**MongoDb Command Line (Basic Commands) :-**

- `show dbs :-` It will list down the all the databases.

- `use database_name :-` It will use the database.

- `db.createCollection('name') :-` It will create collection with name.

- `db.collection_name.drop() :-` It will drop collection.

- `db.dropDatabase() :-` It will drop database.


### CRUD in MongoDb CLI

**CRUD through commandline :-**

- `db.collection_name.insertOne(obj) :-` 
    
    It will insert data in the form of object in collection.

- `db.collection_name.find() :-` 

    It will list down the data in the collection.

- `db.collection_name.updateOne({name:'mohan'},{$set:{brand:'Oppo'}}) :-`

    This will update the entry where name will be mohan and updates the brand or inserts a key value if key does not exists.

- `db.collection_name.deleteOne({name:'shiv'}) :-`  

    This will delete the entry where name will be shiv.

### CRUD in NodeJs wiht MongoDb

For connecting the mongoDb with nodeJs we need to install `npm i mongodb` which is official driver of the mongoDbl.

**Steps to connection and getting data :-**

- First import `mongoClient` like `const {MongoClient} = require('mongodb')`.

- Create config variables as like mentioned below.

    ```
    const {MongoClient} = require('mongodb');
    const url = 'mongodb://localhost:27017';
    const db_name = 'Users'
    const collection = 'Users_data'

    const client = new MongoClient(url)
    ```

- Create Function for the connection in which tell the mongo client about the dbname and collection as like mentioned below and use the mongo Methods on the `col_obj` as like mentioned below.

    ```
    // Config
    const {MongoClient} = require('mongodb');
    const url = 'mongodb://localhost:27017';
    const db_name = 'Users'
    const collection = 'Users_data'
    const client = new MongoClient(url)

    // Connection and get Data Function
    async function connect() {
        let connection = await client.connect()
        // console.log("Connection =>",connection)

        let db = connection.db(db_name)
        let col_obj = db.collection(collection)
        let data = await col_obj.find().toArray();
        console.log("Data =>",data)
    }
    
    // It will return the array of objects in which data will be stored.
    connect() 
    ```

In the above process, when we want to get the data from mongo we need to convert the resolve promise into array. like `let data = await col_obj.find().toArray();`.


### DB Config File and Calling function in another files

- First create seprate file for database configuration and return the `collection` like mentioned below and weather if it will be function but pass it as variable at the `module.exports = connect`.

    ```
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
    ```
- Import `dbConnection` in the another file like `const connection = require('./db/mongoConfig')`.

- Create the Get Data Function in which call the connection first and use the `await` bcoz it's async function return and which returns the promise.
`let dbObj =  await connection()`.


- And Now we can use the all the collection methods on the dbOnj variable liek get and all as like mentioned below.

    ```
    const connection = require('./db/mongoConfig')

    async function getData() {
        let dbObj =  await connection()
        let data = await dbObj.find().toArray();
        console.log("Data =>",data)
    }
    getData()

    ```


### Insert Opration in mongo In nodeJs

Nothing special for the insert opration, same we need to import the connection and we need call it asynchronusly and we need to call the `.insert({name:'shiv'})` for the single insertion and `.insert([{name:'shiv'},{name:'Sai'}])` for the batch insertion.


```
    // For single insertion
    async function insert(){
        let dbObj =  await connection()

        let inesrted = await dbObj.insertOne({name:'shiv2'})
        console.log("Inserted result =>",inesrted)
    }

    insert()

    // For batch insertion
    async function batch_insert(){
        let dbObj =  await connection()

        let inesrted = aw dbObj.insertOne([{name:'shiv2'},{name:'sai2'}])
        console.log("Inserted result =>",inesrted)
    }

    batch_insert()
```

### Update Opration in mongoDb in nodeJs

### Delete Opration in mongoDb in nodeJs



















































































