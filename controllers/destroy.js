var connection = require('./../config');
module.exports.delete=function(req,res){
    var users=req.body.email;
   
    connection.query('DELETE FROM USER_DETAILS WHERE EMAIL = ?' ,[users],function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:'there are some error with query'
            })
            console.log(error)
      }else{
        
          //  if(password==results[0].password){
                res.json({
                    status:true,
                    message:'successfully removed'

                })
                console.log(results)
            //}else{
              //  res.json({
                 // status:false,
                  //message:"Email and password does not match"
                 //});
            }
         
        
       
      
      
    });
}