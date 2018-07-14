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

// test for "setTimeout", should out put trible "3" based on what I got in "https://www.cnblogs.com/tugenhua0707/p/4083475.html"
// But I got "1,2,3"
// for(let i = 1;i <= 3;i++)
// {
//     setTimeout(function () {
//         console.log(i);
//     },100);
// }

// test for EventEmitter
// const EventEmitter = require('events').EventEmitter;
// var event = new EventEmitter;
// event.on('eventHandler',function () {
//     console.log('Now In eventHandler');
// });
// //向EventEmitter注册所需函数 “eventHandler”
// setTimeout(function () {
//     event.emit('eventHandler')
// },1000);
// //延时1秒后触发匿名函数，以emit方法调用event中注册的eventHandler函数

// test for EventEmitter(with listenner bonded)
// const EventEmitter = require('events').EventEmitter;
// var event = new EventEmitter;
// //菜鸟教程：当事件触发时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递。
// //理解1：以emitter.on的形式绑定的第一个字符串参数即事件，匿名函数即监听器。
// // 理解2: 当事件发生时，所有绑定在此事件上的监听器（函数或方法）将会被触发并执行（异步，真尼玛妙）
// event.on('eventHandler',function (arg1 , arg2) {
//     console.log(`now Call Listener1 arg1 : ${arg1}, arg2 : ${arg2}`);
// });
// event.on('eventHandler',function (arg1 , arg2) {
//     console.log(`now Call Listener2 arg1 : ${arg1}, arg2 : ${arg2}`);
// });
// event.emit('eventHandler','argument1','argument2');

// 2018.07.14 23:10 今天菜鸟结束，看http模块然后睡觉
