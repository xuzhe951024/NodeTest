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


//test for EventEmitter(with listenner bonded)
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

//2018.07.14 23:10 今天菜鸟结束，看http模块然后睡觉

//JS闭包补充（关于返回闭包函数时使用变量问题）
// function count() {
//     var arr = [];
//     for (var i=1; i<=3; i++) {
//         arr.push(function () {
//             return i * i;
//         });
//     }
//     return arr;
// }

// var results = count();
// var f1 = results[0];
// var f2 = results[1];
// var f3 = results[2];
// //廖雪峰:返回闭包时牢记的一点就是：返回函数不要引用任何循环变量，或者后续会发生变化的变量。

//需要在闭包中引用循环变量时
// function count() {
//     var arr = [];
//     for (var i=1; i<=3; i++) {
//         arr.push((function (n) {
//             return function () {
//                 return n * n;
//             }
//         })(i));
//     }
//     return arr;
// }

// var results = count();
// var f1 = results[0];
// var f2 = results[1];
// var f3 = results[2];

//多层闭包
// 'use strict';
// var zero = function (f) {
//     return function (x) {
//         return x;
//     }
// };
// var test_zero = zero(1);
// console.log(test_zero(3));

// var one = function (f) {
//     return function (x) {
//         return f(x);
//     }
// };
// var test_one = one(function (x) {
//     return x+1;
// });
// console.log(test_one(1));


//test for Arrow Function
//return Object(s) with Arrow Function
// var test_arrFunc = x => ({ foo: x});
// console.log(test_arrFunc(1));

//test for Generator
// function* next_id(){
//     for (x = 1; x<100; x ++){
//         yield x;
//     }
//     return ;
// }
// var
//     x,
//     pass = true,
//     g = next_id(),
//     temp;
// for (x = 1; x < 100; x ++) {
//     temp = g.next().value;
//     console.log(`x : ${x}, next : ${temp}`);
//     if (temp !== x) {
//         pass = false;
//         console.log('测试失败!');
//         break;
//     }
// }
// if (pass) {
//     console.log('测试通过!');
// }

//test for class
// function Cat(name) {
//     this.name = name;
// }
// Cat.prototype.say = function(){
//     return `Hello, ${this.name}!`;
// }

// var kitty = new Cat('Kitty');
// var doraemon = new Cat('哆啦A梦');
// console.log(kitty.name);
// console.log(typeof kitty.say);
// console.log(kitty.say());
// // console.log();
// // console.log();
// // console.log();
// if (kitty && kitty.name === 'Kitty' && kitty.say && typeof kitty.say === 'function' && kitty.say() === 'Hello, Kitty!' && kitty.say === doraemon.say) {
//     console.log('测试通过!');
// } else {
//     console.log('测试失败!');
// }