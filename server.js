const express = require("express");
const hbs = require('hbs');

var app = express();
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.use(express.static(__dirname+'/public'));

hbs.registerHelper('getCurrentYear', function(){
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', function(text){
    return text.toUpperCase();
});

// app.get('/',function(req, res){
//    // res.send("<h1>Hello Express</h1>");
//     res.send({
//         name: 'Antonio',
//         lastname: 'Seraus',
//         likes: [ 'cycling','hiking']
//     })
// });


app.get('/',function(req, res){

    res.render('home.hbs',{
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome on the home page'
   // currentYear: new Date().getFullYear()

    });
});

app.get('/about',function(req, res){
   // res.send("<h1>About Us!</h1>");
   res.render('about.hbs',{
       pageTitle: 'About Page'
      // currentYear: new Date().getFullYear()
   });
});

app.get('/bad',function(req, res){
    res.send({errorMessage: 'Unable to handle message'});
});

app.listen(3000,function(){
    console.log('Server is listening on port 3000');
})