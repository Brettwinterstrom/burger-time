var connection = require("./connection.js");

var orm = {
    // selectAll: function (tableInput) {
    //     var queryString = "SELECT * FROM ??";
    //     connection.query(queryString, [tableInput], function (err, result) {
    //         if (err) throw err;
    //         // result.render("index", { burger: result });
    //     });
    // },

    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
    // insertOne: function (tableInput) {

    // },

    // updateOne: function () {

    // },
}

module.exports = orm;