// 
let http = require("http")

let fs = require("fs")

let url = require("url")

let path = require("path")

http.createServer((req, res) => {
    
    // 获取响应路径
    let pathName = req.url;
    
    if (pathName == "/") {
        pathName = "/index.html"
    }
    
    // 获取文件的后缀名
    let exName = path.extname(pathName)
    
    // 
    if (pathName != '/favicon.ico') {
        
        fs.readFile("./08_WebService/" + pathName, (err, data) => {
            // 如果没有找到需要的文件
            if (err) {
                console.log("404");
                
                fs.readFile("./08_WebService/404.html", (errNotFound, dataNotFound) => {
                    
                    // 设置头
                    if (errNotFound) {
                        console.log(errNotFound)
                    } else {
                        
                        // 设置头
                        res.writeHead(200, {
                            "Content-Type": "text/html; charset='utf-8'"
                        })
                        
                        res.writeFile(dataNotFound)
                        
                        res.end()
                        
                    }
                    return false
                })
                
            } 
            // 返回这个文件
            else {
                
                // 获取文件类型
                let ext = getExt(pathName)
                console.log(ext)
                
                // 设置头
                res.writeHead(200, {
                    "Content-Type": ext + "; charset='utf-8'"
                })
                
                res.write(data);
                
                res.end();
            }
        })
    }
}).listen(3000)


// 获取后缀名
getExt = (extName) => {
    // readFile 是异步操作， 所以需要用 readFileSync
    let data = fs.readFileSync('./08_WebService/08_ext.json')
    let ext = JSON.stringify(data.toString())
    return ext[extName]
}