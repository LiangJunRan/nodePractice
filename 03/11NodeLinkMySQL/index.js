let mysql = require("mysql");

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'vueblog2'
})

connection.connect();

connection.query("SELECT * FROM user", function(error, results, fields) {
    if (error) throw error;
    console.log(results);
})


connection.end();
