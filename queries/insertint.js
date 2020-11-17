var connection = require('../config');
module.exports.addinterest=function(req,res){
   var users=req.headers.user;
   var int=req.body.interest;
    console.log(users);
    
   connection.query('INSERT INTO INTERESTS(USER_ID,INTERESTS) VALUES(?,?)',[users,int],function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:'there are some error with query'
            })
            console.log(error)
      }else{
                res.json({
                    status:true,
                    message:'successfully authenticated'

                })
             
       

}
})
}