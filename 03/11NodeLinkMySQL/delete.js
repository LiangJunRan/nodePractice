let mysql = require("mysql");

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'vueblog2'
})

connection.connect();

var delSql = 'DELETE FROM user where id = 21'

connection.query(delSql, function(err, data){
    if (err) {
        console.log("删除出错")
        console.log(err)
        return 
    } else{
        console.log("删除成功");
        console.log(data)
        return
    }
})


connection.end();