let mysql = require("mysql");

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'vueblog2'
})

connection.connect();

let addSql = "INSERT INTO user(username, nickname, password, enabled, email, userface, regTime) VALUE (?,?,?,?,?,?,?)"

let addSqlParams = ["node1", "node添加1", "123456", 0, "node@qq.com", "https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2822806539,3062548505&fm=85&app=79&f=JPG?w=121&h=75&s=CAAC1463770CF313CCF8A8640300A0F3", new Date()]

connection.query(addSql, addSqlParams, function(err, res){
    if (err) {
        console.log("新增出错");
        console.log(err);
        return
    } else{
        console.log("新增成功");
        console.log(res);
        return
    }
})

connection.end();
