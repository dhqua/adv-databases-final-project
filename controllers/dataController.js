let mysql = require('mysql');
let con = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    database: "project4",
    password: "pammas",
});

exports.getSideEffect = function(req,res){
    let drugname = req.body.drugname;
    var sql = "select r.pt, r.primaryid, r.caseid, d.drugname from drug d inner join reaction r on r.primaryid = d.primaryid and r.caseid = d.caseid and d.drugname = '" + drugname + "';";
    con.query(sql, function (err, row, fields) {
        if (err)
            res.json({
                response: false
            });
        else
            var result = {
                response: true,
                result: row
            };
        res.json(result);
    });
};
exports.getDrugAndSideEffect = function (req, res) {
    let drugname = req.body.drugname;
    let pt = req.body.pt;
    let sql = "select count(pt) count from reaction r inner join drug d on r.primaryid = d.primaryid and r.caseid = d.caseid and drugname = '" + drugname + "' and pt = '" + pt + "';";
    con.query(sql, function (err, row, fields) {
        if (err)
            res.json({
                response: false
            });
        else {
            var result = {
                response: true,
                result: row
            };
            res.json(result);
        }
    });
};
exports.getDrugAndNoSideEffect = function (req, res) {
    let drugname = req.body.drugname;
    let pt = req.body.pt;
    let sql = "select count(pt) count from reaction r inner join drug d on r.primaryid = d.primaryid and r.caseid = d.caseid and drugname = '" + drugname + "' and pt <> '" + pt + "';";
    con.query(sql, function (err, row, fields) {
        if (err)
            res.json({
                response: false
            });
        else {
            var result = {
                response: true,
                result: row
            };
            res.json(result);
        }
    });
};
exports.getNoDrugAndSideEffect = function (req, res) {
    let drugname = req.body.drugname;
    let pt = req.body.pt;
    let sql = "select count(pt) count from reaction r inner join drug d on r.primaryid = d.primaryid and r.caseid = d.caseid and drugname <> '" + drugname + "' and pt ='" + pt + "';";
    con.query(sql, function (err, row, fields) {
        if (err)
            res.json({
                response: false
            });
        else {
            var result = {
                response: true,
                result: row
            };
            res.json(result);
        }
    });
};
exports.getNoDrugAndNoSideEffect = function (req, res) {

    let sql = "select count(pt) count from reaction r inner join drug d where r.primaryid = d.primaryid and d.caseid = r.caseid;";
    con.query(sql, function (err, row, fields) {
        if (err)
            res.json({
                response: false
            });
        else {
            var result = {
                response: true,
                result: row
            };
            res.json(result);
        }
    });
};