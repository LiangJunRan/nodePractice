// 
let http = require("http");

// 模拟 SQL 读取出来的数据
let items = [];

// 
http.createServer((req, res) => {
    // 设置跨域的域名，*代表允许任意域名跨域
    res.setHeader("Access-Control-Allow-Origin", "*");
    // 设置 header 类型
    res.setHeader("Access-Control-Allow-Headers", "Content-type");
    // 跨域允许的请求方式
    res.setHeader('Content-Type', "application/json");
    
    // 判断请求
    switch(req.method){
        // post 请求时，浏览器会先发一次 options 请求，如果有请求通过，则继续发送正式的 post 请求
        case "OPTIONS":
            res.statusCode = 200;
            res.end();
            break;
        
        // 如果是 get 请求，则直接返回 items 数组
        case "GET":
            let data = JSON.stringify({
                items: items,
                ContentType: 'GET'
            })
            res.write(data);
            res.end();
            break;
        
        // 如果是 POST 请求
        case "POST":
            let item = {
                code: "0",
                data: "我是post请求"
            };
            
            item = JSON.stringify(item)
            
            // 获取每次发送的数据
            req.on('data', (chunk) => {
                console.log("45", chunk)
                item += chunk
            })
            
            // 数据发送完成
            req.on('end', () => {
                // 存入
                item = JSON.parse(item)
                console.log("53", item)
                items.push(item.item);
                
                // 返回数据到客户端
                let data = JSON.stringify({
                    items: items,
                    ContentType: 'POST'
                });
                
                res.write(data)
                res.end();
            });
            break;
    }
}).listen(3000)

console.log('http server is start...');