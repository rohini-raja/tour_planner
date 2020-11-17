var connection = require('../config');
module.exports.holidays = function (req, res) {
    // var users=req.query.USER_ID;
    console.log(req.headers)
    var users = req.headers.user;
    var dates = req.body.Date;
    console.log(users);
    console.log(req.body)
    connection.query('INSERT INTO MYHOLIDAYS(MYHOLIDAYS,USER_ID) VALUES(?,?)', [dates, users], function (error, results, fields) {
        if (error) {
            if (error.code = 'ER_DUP_ENTRY') {
                res.status(500).json({ message: 'Details already Added' })
            } else {
                res.status(500).json({
                    status: 500,
                    message: 'there are some error with query'
                })
            }
        } else {
            res.status(200).json({
                status: 200,
                message: req.body.email
            })
            // console.log(results)
        }
    });
}
