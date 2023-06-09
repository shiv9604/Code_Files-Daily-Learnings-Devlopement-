// Core Modules
const http = require("http");

// Custom Modules
const LoggerModule = require("./modules/logger-module");
const loggerModule = new LoggerModule();

loggerModule.on("loggerEvent", (data) => {
  console.log("Log event Emitted :", data);
});

// Calling Message Logger
loggerModule.log("Message");

// With HTTP Server
const server = http.createServer((req, resp) => {
  if (req.url === "/") {
    resp.write("Hello World");
    resp.end();
  }

  if (req.url === "/api/courses") {
    const courses = [1, 2, 3, 4, 6];
    resp.write(JSON.stringify(courses));
    resp.end();
  }
});

server.listen(4900);
