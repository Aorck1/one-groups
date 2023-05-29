const mysql = require('mysql');


const db = mysql.createConnection({

  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '123456',
  database: 'huawei'

})

db.connect()

module.exports = db;
