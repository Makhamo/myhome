console.log("Starting scriptss...");
const mysql = require('mysql2/promise')

const msqlPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'MyLast611@',
    database: 'employees_db'

})



module.exports = msqlPool
