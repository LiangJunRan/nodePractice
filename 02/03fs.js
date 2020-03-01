/**
 * 对文件进行操作
 */

const fs = require("fs")

// 异步读取
fs.readFile("./data/index.txt", 'utf-8', (err, data) => {
    console.log("异步读取", data)
})

// 同步读取
let data = fs.readFileSync("./data/index.txt", "utf-8")
console.log("同步读取", data)

// 先输出 同步读取, 后输出异步读取

// 创建读取流
const stream = fs.createReadStream('./data/index.txt', 'utf-8')

// 此处使用 eventEmitter.on() 来监听事件
stream.on('data', res => {
    console.log("创建读取流", res)
})


/**
 * 写入/修改文件
 */

// 在data内新建一个空白文件write.txt  ,写入'添加的东西'
fs.writeFile('./data/write.txt', '添加的东西', 'utf-8', err => {
    if (err) {
        throw err
    } else {
        console.log("完成了???", err)
    }
})

// 修改index.txt文件内容, 修改为 '添加的东西'
fs.writeFile('./data/index.txt', '添加的东西', 'utf-8', err => {
    if (err) {
        throw err
    } else {
        console.log("完成了???", err)
    }
})

// 同步写入
fs.writeFileSync('./data/writeSync.txt', 'Hello NodeJs')

// 文件流写入
// const ws = fs.create


/**
 * 删除文件/文件夹
 */


