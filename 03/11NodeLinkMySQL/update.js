let mysql = require("mysql");

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'vueblog2'
})

connection.connect();

let updateSql = "UPDATE user SET username=?,email=? WHERE id = ?"

let updateSqlParams = ["nodeUpadte", "nodeUpdate@163.com", 22]

connection.query(updateSql, updateSqlParams, function(err, res){
    if (err) {
        console.log("修改出错")
        console.log(err)
        return
    } else {
        console.log("修改成功")
        console.log(res)
        return
    }
})


// 
connection.end()