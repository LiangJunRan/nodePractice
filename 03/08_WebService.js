// 引入http 模块
let http = require("http")

// 引入fs 模块
let fs = require("fs")

http.createServer((req, res) => {
    // 获取响应路径
    let pathName = req.url;
    console.log(pathName)
    // 添加默认路径
    if (pathName == "/") {
        // 添加默认首页
        pathName = "index.html"
    } 
    
    // 过滤 /favicon.ico 请求
    if ( pathName != '/favicon.ico') {
        // 获取08_WebService下的index.html
        fs.readFile("./08_WebService/" + pathName, (err, data) => {
            if (err) {
                // 如果不存在这个文件
                console.log("返回404")
                
                fs.readFile("./08_WebService/404.html", (errNotFound, dataNotFound) => {
                    if (errNotFound) {
                        console.log(errNotFound)
                    } else{
                        res.writeHead(200, {
                            "Content-Type": "text/html; charset='utf-8'"
                        })
                        // 读写入文件
                        res.write(dataNotFound)
                        // 结束响应
                        res.end();
                    }
                })
                return;
            } else {
                // 返回这个文件
                
                // 设置请求头
                res.writeHead(200, {
                    "Content-Type": "text/html; charset='utf-8'"
                })
                
                res.write(data)
                
                res.end();
                
                return;
            }
        })
    }
}).listen(3000)