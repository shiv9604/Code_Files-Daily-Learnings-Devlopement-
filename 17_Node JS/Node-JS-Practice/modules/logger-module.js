const EventEmitter = require('events');

class LoggerModule extends EventEmitter{        
    id=1;
    log(message){
        console.log(`Logger Service : ${message}`);
        this.emit('loggerEvent',{id:1})
        this.id++;      
    }    
}

module.exports = LoggerModule;