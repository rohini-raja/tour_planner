var connection = require('../config');
module.exports.dates=function(req,res){
     var id=req.headers.user;
    connection.query('SELECT * FROM PACKAGE WHERE PINCODE IN(SELECT PINCODE FROM DATES WHERE DATES IN(SELECT MYHOLIDAYS FROM MYHOLIDAYS WHERE USER_ID=?))',[id],function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:'there are some error with query'
            })
            console.log(error)
      }else
        {
            res.json({
                status:true,

                data:results[0]
            })
            console.log(results)
        }
         });
}

module.exports.booking=function(req,res){
  var users =req.body;
 connection.query('UPDATE PACKAGE BOOKING SET',[id],function (error, results, fields) {
   if (error) {
       res.json({
         status:false,
         message:'there are some error with query'
         })
         console.log(error)
   }else
     {
         res.json({
             status:true,
             message:'successfull',
             data:results
         })
         console.log(results)
     }
      });
}