require('dotenv').config();
const mysql= require("mysql2")
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database:process.env.DB_NAME,
    password:process.env.DB_PASSWORD
}
)
const sql="SELECT * FROM posts"

pool.execute(sql, function(err,results){
    if(err) throw err;
    results.forEach((res) => {
        console.log(res.bodyq)
    });
   
})
module.exports= pool.promise(); 