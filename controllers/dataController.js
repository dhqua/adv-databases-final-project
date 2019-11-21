let mysql = require('mysql');
let con = mysql.createPool({
    connectionLimit: 10,
    host:'localhost',
    username:'root',
    database:'project4',
    password:'pammas',
});

exports.getSideEffect = function(req,res){

};