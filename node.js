const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mta_server"
});

db.connect(err => {
    if (err) throw err;
    console.log("تم الاتصال بقاعدة البيانات!");
});

app.get("/api/stats", (req, res) => {
    db.query("SELECT COUNT(*) AS players FROM players WHERE online = 1", (err, result) => {
        if (err) throw err;
        res.json({ players: result[0].players });
    });
});

app.listen(3000, () => {
    console.log("السيرفر يعمل على http://localhost:3000");
});
