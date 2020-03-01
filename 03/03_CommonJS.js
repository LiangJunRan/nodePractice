let http = require("http");

let tools = require("./03_tool-add.js");

let tools2 = require("03_tool-multiply.js")


/**
 * 通过 package.json 来引入文件
 * 1、 通过在 jsliang-module 目录中使用 npm init --yes 命令。生成package.json 文件
 * 2、 package.json 文件中告诉了程序入口为 "main": "tools.js"
 * 3、 Node 通过 require 查找 jsliang-module ，发现它有一个 package.json
 * 4、 Node 执行 tools.js 文件
 */

var tools3 = require('jsliang-module');

http.createServer(function (req, res) {
    
    console.log(tools.add(1, 2, 3));
    console.log(tools2.multiply(1, 2, 3));
    
    console.log(tools3.add(1, 2, 3))
    console.log(tools3.multiply(1, 2, 3))
    
    let data = {
        code: "0",
        data: [
            {
                name:'1',
                number1: "1"
            },
            {
                name: '2',
                number2: "2"
            }
        ]
    }
        
    
    res.writeHead(200, {
        // "Content-type": "text/html;charset=utf-8",
        "Content-type": "application/json;charset=utf-8" // 修改为返回json。就么有favicon.ico的请求了
    })
    
    res.write(JSON.stringify(data))
    
    res.end();
    
}).listen(3000)