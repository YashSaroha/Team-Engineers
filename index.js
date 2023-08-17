var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.set('views','./views');
app.use(express.static("views/static"));
const process = require('process');
const port = process.env.PORT || 4500;
app.listen(port);
console.log("Server Started on port 4500");


// Reg. Form 
// app.get('/', function(req, res){
//     res.render('form')
//   });

// app.get('/', function(req, res){
//     res.render('home')
// });
// app.get('/about', function(req, res){
//     res.render('about')
// });
// app.get('/contact', function(req, res){
//     res.render('contact')
// });
// app.get('/our-team', function(req, res){
//     res.render('our-team')
// });



app.get('/', function(req, res){
    res.render('our-team')
});