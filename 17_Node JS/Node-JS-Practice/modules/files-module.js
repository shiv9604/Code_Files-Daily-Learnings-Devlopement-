const fs = require('fs')
const path = require('path');

function createFile(path,content){
    let dir = path.slice(0,path.lastIndexOf('/'));

    if(dir && !fs.existsSync(dir)){
        fs.mkdirSync(dir)
        console.log(`${dir} Created`)
    }

    if(dir && content){
        fs.writeFile(path,content,(err=>{
            if(err) console.error("Error Occured while creating file :",err)
        }))
    }
}

function getFiles(dir){
    fs.readdir(path,(err,files)=>{
        if(err) console.log("Error occured while getting files :",dir);
        if(files) return files;
    })
}

const filesModule = {
    createFile,
    getFiles,
}

module.exports = filesModule;
