const mysql = require('mysql');

let connection;
if (process.env.JAWSDB_URL) {
    connection = connection.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'password',
        database: 'chicken_tinder_db',
    });
}
module.exports = connection;
