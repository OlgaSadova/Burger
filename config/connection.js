// Set up MySQL connection.
var mysql = require("mysql");

var connecting;

if (process.env.JAWSDB_URL) {
    connecting = mysql.createConnection(process.env.JAWSDB_URL);

} else {
    connecting = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Soa15091987',
        database: 'burgers_db'
    });
};

// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "Soa15091987",
//     database: "burgers_db"
// });

// // Make connection.
// connection.connect(function(err) {
//     if (err) {
//         console.error("error connecting: " + err.stack);
//         return;
//     }
//     console.log("connected as id " + connection.threadId);
// });

// Export connection for our ORM to use.
connecting.connect();
module.exports = connection;