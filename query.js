var express=require('express')
var bodyparser=require('body-parser')

var app=express();

var myint=require('./queries/myinterest')
var mat=require('./queries/matchingdate')
 var place=require('./queries/view')
var avail=require('./queries/available')
var add=require('./queries/interests')
var myhol=require('./queries/Myholidays')


app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.post('/api/information',place.information);
app.post('/api/interest',myint.interest);
app.post('/api/dates',mat.dates);

app.post('/api/availabledata',avail.availabledata);
app.post('/api/addinterest',add.addinterest);
app.post('/api/holidays',myhol.holidays);

app.listen(8012);
