// const http = require('http')

// const server = http.createServer(function(req,res) {
//     res.writeHead(200,{
//         'content-type': 'text/plain' 
//     });
//     res.end('Hello, Node.js!');
// });
// server.listen(3000,function() {
//     console.log('listening port 3000');
// });

//test for "setTimeout", should out put trible "3" based on what I got in "https://www.cnblogs.com/tugenhua0707/p/4083475.html"
//But I got "1,2,3"
// for(let i = 1;i <= 3;i++)
// {
//     setTimeout(function () {
//         console.log(i);
//     },100);
// }

//test for EventEmitter
const EventEmitter = require('events').EventEmitter;
var event = new EventEmitter;
event.on('eventHandler',function () {
    console.log('Now In eventHandler');
});
setTimeout(function () {
    event.emit('eventHandler')
},1000);