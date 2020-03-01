const EventEmitter = require('events')

class Application extends EventEmitter {}

const app = new Application()

app.on('hello',data => {
    console.log(data)
})

app.emit('hello', 'hello modeJs')


/**
 * 多个事件监听以及this指向
 * 
 * 绑定多个事件监听器时,事件监听器按照注册的顺序执行
 * 
 * 当监听器函数被调用时,this关键词会指向监听器所绑定的EventEmitter实例.也可以使用ES6的箭头函数作为监听器,但this关键词不会指向EventEmitter实例.
 * 
 */

class Person extends EventEmitter {
    constructor() {
        super()
    }
}

const mrNull = new Person

// 监听play事件
mrNull.on('play', function(data){
    console.log(this);  //此时this指向Person
    console.log(`paly`);
})

// 监听play事件
mrNull.on('play', data => {
    console.log(this); // {}
    console.log(`paly 箭头`);
})

// mrNull.emit('play', 'hello nodeJs');


/**
 * 同步VS异步
 * 
 * EventEmitter 以注册顺序同步调用所有监听器
 * 
 */

/**
 * 监听器函数可以使用 setImmediate() 和 process.nextTick() 方法切换到异步的操作模式
 */

const developer = new Person();

developer.on('dev', (data) => {
    setImmediate(() => {
        console.log(data + 'setImmediate') 
    })
})

developer.on('dev', (data) => {
    process.nextTick(() => {
        console.log(data + 'process')
    })
})

developer.on('dev', (data) => {
    console.log(data + '空')
})

// developer.emit('dev', 'hello nodeJs')

console.log('hello developer')

// hello nodeJs空
// hello developer
// hello nodeJsprocess
// hello nodeJssetImmediate


/**
 * 只调用一次
 * 
 * 使用 eventEmitter.once() 可以注册最多可以使用一次的监听器,监听器会被注销,然后再调用.
 * 
 */

mrNull.once('playOnce', () => {
    console.log('playOnce !!!')
})

mrNull.emit('playOnce')
mrNull.emit('playOnce')

// playOnce只输出了一次


/**
 * 事件触发顺序
 * 
 * 在注册事件之前触发该事件,不会被触发
 * 
 */




/**
 * 移除事件监听
 * 
 * 
 * 
 */

mrNull.on('playRemove', () => {
    console.log("paly remove")
})

mrNull.emit('playRemove'); // 输出paly remove

// 使用.off或者.removeListener() 
// 其中 .off 是v10.0.0新增,是.removeListener()的别名

mrNull.removeListener('playRemove');

mrNull.emit('playRemove'); // 无法输出任何东西
 