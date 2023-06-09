// Core Modules
const express = require('express');
const app = express();
const path = require('path');
const helmet = require(`helmet`);
const morgan = require(`morgan`);
const env = require('dotenv').config();

// Custom Modules
const validationsModule = require("./modules/validations-module");
const logger = require('./Middlewares/Log');
const authentication = require('./Middlewares/Auth');

// Constants
const filesDir = path.join(__dirname,'files')

// Middlewares
app.use(express.json());
app.use(logger);
app.use(authentication);
app.use(express.static(filesDir));
app.use(helmet())
if(app.get('env')==='development'){
    app.use(morgan('tiny'))
    console.log('Morgan enabled...')
}

console.log(process.env.NODE_ENV)
console.log();
let courses = [
    {
        id:1,
        name:'One'
    },
    {
        id:2,
        name:'Two'
    },
    {
        id:3,
        name:'Three'
    }
]



// Express server
app.get('/',(req,res)=>{
    res.send('<h1>Hello World</h1>')
})

app.get('/api/courses',(req,res)=>{
    res.status(200).send(courses)
})

app.get('/api/courses/:id?',(req,res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('Course with given id not found')
    res.status(200).send(course)
    
})

app.post('/api/courses',(req,res)=>{
    // Validation
    const {error } = validationsModule.validateCourse(req.body)
    if(error)  return res.status(400).send(error.details[0].message);

    const course = {
        id:courses.length+1,
        name:req.body.name
    }
    courses.push(course);
    res.status(200).send(course);
})

app.put('/api/courses/:id',(req,res)=>{
    // Checking If course exists
    const course = courses.find(c=>c.id===parseInt(req.params.id))
    if(!course) return res.status(404).send("Course with provided id not found.")

    // Checking Is valid
    const {error} = validationsModule.validateCourse(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    // Updating Course and sending response
    course.name = req.body.name;
    res.status(200).send(course);
})

app.delete('/api/courses/:id',(req,res)=>{
    // Checking if course exists
    const course = courses.find(c=>c.id===parseInt(req.params.id));
    if(!course) return res.status(404).send("Course with provided id not found.");

    // Deleting Course
    const courseIndex = courses.indexOf(course);
    courses.splice(courseIndex,1);

    // Sending Response
    res.status(200).send(course);
})


const port = process.env.PORT || 4800;

app.listen(port,()=>{
    console.log(`Listening on port ${port}...`)
})