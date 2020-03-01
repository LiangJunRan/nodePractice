// 1.引入http模块
let http = require("http");

// 引入url模块
let url = require("url");

// 3.用http模块创建服务
/**
 * req 获取url信息（request）
 * res 浏览器返回响应信息（response）
 */

http.createServer(function(req, res){
    // 4.获取服务器请求
    
    /**
     * 访问地址是 http://localhost:3000/?userName=liang&userAge=23
     * 如果你执行 console.log(req.url) 它将执行两次，分别返回下面的信息：
     *      ?userName=liang&userAge=23
     *      /favicon,ico
     * 为了防止重复执行，所以排除req.url == /favicon.ico的情况
     */
    
    console.log(url)
    
    if (req.url != "/favicon.ico") {
        // 5.使用 url 的 parse 方法
        /**
         * parse 方法需要两个参数：
         * 第一个参数是地址
         * 第二个参数是 true 的话表示把get传值换成对象
         */
        
        let result = url.parse(req.url, true); // 此处加上true的话，query是对象，而默认和false则为 字符串 
        
        console.log(result);
        /**
         * url {
         *    protocol: null,
         *    slashes: null,
         *    auth: null,
         *    post: null,
         *    hostname: null,
         *    hash: null,
         *    search: "?userName=liang&userAge=23"
         *    query: {userName: 'liang', userAge: 23}
         *    pathname: '/',
         *    path: '/?userName=liang&userAge=23',
         *    href: '/?userName=liang&userAge=23'
         * }
         */
        console.log(result.query.userName);
        console.log(result.query.userAge);
        
    }
    
    // 设置 http 头部，状态码是200 ，文件类型是 HTML，字符集是utf-8
    res.writeHead(200, {
        "Content-Type": "text/html;charset=utf-8"
    })
    
    // 往页面打印
    res.write("打印一些东西")
    
    // 结束
    res.end()
    
    
}).listen(3000)
