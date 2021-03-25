const mysql = require('mysql');

var db  = mysql.createPool({
    connectionLimit : 10,
    host: 'us-cdbr-east-03.cleardb.com',
    user: 'b68459cf499e91',
    password: '8c2e7367',
    database: 'heroku_23507d72fa1af74'
  });
  
module.exports = db;