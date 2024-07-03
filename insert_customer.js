var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb",
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    var sql = "INSERT INTO Customers (name, address) VALUES ('Jason','Highway 37'),('Marry','Highway 38'),('Janny','Highway 34'), ('Jacob','Highway 32'), ('Johan','Highway 35')";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Customer Created.");
    });

    con.end(); // Close the connection
});
