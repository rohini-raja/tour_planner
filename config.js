var sql=require('mysql')
var connection=sql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database :'DBMS'
});
connection.connect(function(err){
    if(!!err)
    {
        console.log('Error while connection')
    }
    else
    {
        console.log('Database connected')
    }
});
module.exports=connection;