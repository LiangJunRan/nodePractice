// Node 的 events 模块

// 引如 fs 
let fs = require("fs");

/**
 * 
 * Node 事件循环
 * 1、Node 是单进程单线程应用程序，但是通过事件和回调函数支持并发，所以性能非常高
 * 2、Node 的每一个API都是异步的，并作为一个独立线程运行，使用异步函数调用，并处理并发。
 * 3、Node 有多个内置事件，我们可以通过引入 events 模块，并通过实例化 EventEmitter 类来绑定和监听事件。
 * 
 */

// 引入 events 模块
let events = require("events");

// 实例化事件对象
let EventEmitter = new events.EventEmitter;


getExt = () => {
    fs.readFile("./01/text.json", (err, data) => {
        // 将data广播出去
        EventEmitter.emit("data", data.toString());
    })
}

getExt()

/**
 * 这里我们通过 EventEmitter.on 监听 data 的形式，获取了 getExt 的内部执行结果
 */

// 监听data
EventEmitter.on('data', (ext) => {
    console.log(ext)
})
