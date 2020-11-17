var connection=require('./../config')
// cryptr = new Cryptr('myTotalySecretKey');
 

  

module.exports.register=function(req,res){
    
 console.log('inside')
    //var encryptedString = Cryptr.encrypt(req.body.password);
    var users={
        "mobile_number":req.body.mobile_number,
        "first_name":req.body.first_name,
        "last_name":req.body.last_name,
        "email":req.body.email,
        "user_id":req.body.user_id,
        "street":req.body.street,
        "city":req.body.city,
        "door_no":req.body.door_no,
        "age":req.body.age,
        "zipcode":req.body.zipcode,
        "password":req.body.password
      }
    console.log(users)

//var users=req.body;

    connection.query('INSERT INTO USER_DETAILS SET ?',users, function (error, results, fields)
   {
        if(error)
        {
            res.json({
                status:false,
                message:'There is error'
            })
            console.log(error)
        }
        else
        {
            res.json({
                status:true,
                data:results,
                message: 'User registration successfull'
            })
            console.log(results)
            
        }
    }
    )
}