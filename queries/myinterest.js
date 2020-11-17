var connection = require('../config');
module.exports.interest=function(req,res){
     //var email=req.body.email;
var user=req.headers.user
    connection.query("CALL MYINTEREST(?)",[user],function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:'there are some error with query'
            })
            console.log(error)
      }else
        {
            /*res.json({
                status:true,
                message:'successfull',
                data:results
            })*/
            res.send(results[0])
            console.log(results)
        }
         });
}