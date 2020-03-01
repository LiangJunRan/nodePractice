// 1.引入http 模块
let http = require("http");

// 用http 模块创建服务

/**
 * req 获取 url 信息（request）
 * res 浏览器返回的响应信息（response）
 */

http.createServer(function (req, res){
    // 设置 http 头部，状态码是200，文件类型是 http，字符集是utf-8
    
    res.writeHead(200, {
        "Content-Type": "text/html;charset=utf-8"
    })
    
    // 往页面打印
    res.write("打印一下")
    
    // 响应结束
    res.end()
    
    // response.end()方法接收的参数类型只能是字符串或Buffer。
    
}).listen(3000); // 监听端口