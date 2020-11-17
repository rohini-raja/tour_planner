var connection = require('./../config');
module.exports.authenticate = function (req, res) {
 
  var users = req.body.email;
  var password = req.body.password;
  console.log(users)
  console.log(password)

  connection.query('SELECT * FROM USER_DETAILS WHERE EMAIL = ?', [users], function (error, results, fields) {
    if (error) {
      res.status(500).json({
        status: 500,
        message: 'there are some error with query'
      })
      console.log(error)
    } else {
      // console.log(results,'result')
      // results=[{password:'nij'}]
      if (results.length > 0) {
        pas = results[0].PASSWORD;  
        if (password == pas) {
          res.status(200).json({message: results[0]})
          console.log(results)
        } else {
          res.status(420).json({
            status: 420,
            message: "Email and password does not match"
          });
          console.log(error)
          console.log(results[0].password)
        }
      } else {
        res.status(404).json({
          status: 404,
          message: "Email does not exits"
        });
      }

    }
  });
}