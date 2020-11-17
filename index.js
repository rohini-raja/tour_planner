var express = require('express')
var bodyparser = require('body-parser')
var cors = require('cors');

var app = express();

var authen = require('./controllers/authen')
var reg = require('./controllers/reg_control')
var des = require('./controllers/destroy')
var upd = require('./controllers/update')
var userController = require('./controllers/userInfoController')


var myint=require('./queries/myinterest')
var mat=require('./queries/package')
 var place=require('./queries/view')
var avail=require('./queries/available')
var add=require('./queries/insertint')
var myhol=require('./queries/Myholidays')
var mypack=require('./queries/package')

app.use(bodyparser.urlencoded({
    extended: true
}))
app.use(bodyparser.json())
app.use(cors())
// ---------------------- Serving front-end  ------------------ //

app.use(express.static(__dirname+'/front-end'));

//  console.log('hey')
app.post('/api/register', reg.register);
app.get('/api/getuser', userController.getUserInfo)
app.post('/api/authenticate', authen.authenticate);
app.post('/api/delete', des.delete);
app.post('/api/updat', upd.updat);
app.post('/api/dates',mypack.dates)
// console.log('hello')
app.post('/controllers/authen', authen.authenticate);
app.post('/controllers/register', reg.register);
app.post('/controllers/updat', upd.updat);



app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.post('/api/information',place.information);
app.get('/api/interest',myint.interest);
app.get('/api/dates',mat.dates);

app.post('/api/availabledata',avail.availabledata);
app.post('/api/addinterest',add.addinterest);
app.post('/api/holidays',myhol.holidays);

// console.log('hello')
app.get('/get/images',function(req,res){
    let response = [{
        place:'A',
        path:'/mahabali.jpg'
    },{
        place: 'B',
        path:'/travel.jpg'
    }]
    res.status(200).json(response)
})

app.listen(8012, function (err, data) {
    if (err)
        console.log('err', err)
    else
        console.log('App started at port 8012');
});