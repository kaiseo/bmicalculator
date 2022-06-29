//jshint eversion:6

const express = require('express');
const app = express();
const bodyParser = require('body-parser');


const port = 3000;
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post('/', function (req, res) {
   var num1 = Number(req.body.n1);
   var num2 = Number(req.body.n2);

   var result = num1+num2;

   res.send("The result of the calculation is "+ result);
});

app.get('/bmiCalculator', function(req,res){
    res.sendFile(__dirname+'/bmiCalculator.html');

})

app.post('/bmiCalculator', function(req,res){
    var weight=parseFloat(req.body.weight);
    var height=parseFloat(req.body.height);
    res.send("Your BMI is "+weight/(Math.pow(height,2)));
})

app.listen(port, function () {
    console.log("Server is running on port 3000.");
});