var connection = require('./../config')


module.exports.getUserInfo = function (req, res) {
    connection.query('select * from user_details where USER_ID=?', [req.query.user], function (error, results, fields) {
        if (error) {
            res.status(500).json({
                status: false,
                message: 'There is error'
            })
            console.log(error)
        } else {
            // results = [{
            //     "mobile_number": '9600668149',
            //     "first_name": 'lenin',
            //     "last_name": 'jaganathan',
            //     "email": 'lenijl18@gmail.com',
            //     "user_id": '1',
            //     "city": 'chennai',
            // }]
            res.status(200).json({
                status: true,
                data: results[0],
            })
            console.log(results[0])
            

        }
    })
}  