var connection = require('../config');
module.exports.information = function (req, res) {


    connection.query('SELECT * FROM ISLANDS', function (error, results, fields) {
        if (error) {
            res.json({
                status: false,
                message: 'there are some error with query'
            })
            console.log(error)
        } else {
            res.json({
                status: true,
                message: 'successfully Updated'

            })
            console.log(results)
        }
    });

}