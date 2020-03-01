// Node 的非阻塞 I/O 是什么？


// Node events 模块是什么？


let fs = require("fs")

console.log("1");

getExt = () => {
    fs.readFile("./08_WebService/08_ext.json", (err, data) => {
        console.log("2")
    })
}
getExt();

console.log("3")

/**
 * 运行结果
 * 1
 * 3
 * 2
 */

/**
 * 上面 fs.readFile() 是 Node 的回调函数。所以，程序先执行了1和3，最后才执行的 fs.readFile() 的 2 部分。
 */ 

// 回调函数
/**
 *  getExt = (callback) => {
 *      fs.readFile("./08_WebService/08_ext.json", (err, data) => {
 *          callback(data);
 *      })
 *  }
 * 
 *  getExt((result) => {
 *      console.log("3", result.toString())
 *  })
 * 
 */