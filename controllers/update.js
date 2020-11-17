var connection = require('./../config');

 
module.exports.updat = function (req, res) {
    var mobile = req.body.mobile_number;
    var users  = req.body.email;
    var pass = req.body.password;

    connection.query('UPDATE USER_DETAILS SET MOBILE_NUMBER = ? WHERE EMAIL = ? AND PASSWORD = ?', [mobile, users, pass], function (error, results, fields) {
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