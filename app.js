const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

// connect to db
mongoose.connect('mongodb://localhost/campusT')
let db = mongoose.connection;

//check connection
db.once('open', function() {
    console.log('connected to mongodb')
        // console.log(testUser)
})

//check for db errors
db.on('error', function(err) {
    console.log(err)
})
const dotenv = require('dotenv')
const result = dotenv.config()

if (result.error) {
    throw result.error
}

//init app 
const app = express();

//bring in models
let testUser = require('./models/testUser')
    //init oauth
    // const OAuthServer = require("express-oauth-server");
    // const oauth = new OAuthServer({
    //     model: Model
    // });

// app.get("/oauth/authorize", function (req, res) {
//        res.render('index', {
//            title: 'Hello',
//            users: users
//        });
// });
// app.post("/oauth/authorize", oauth.authorize());
// app.post("/oauth/token", oauth.token());

// https: //api.pinterest.com/oauth/?
//     response_type = code &
//     redirect_uri = https: //mywebsite.com/connect/pinterest/&
//     client_id = 12345 &
//     scope = read_public, write_public &
//     state = 768 uyFys

//views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


//home route
app.get('/', function(req, res) {

    testUser.find({}, function(err, tests) {
        if (err) {

        } else {
            res.render('index', {
                title: 'Hello',
                users: tests
            });
        }

    })

})

// add route

app.get('/users', function(req, res) {
    res.render('users', {
        title: 'Users by Pins'
    });
})

app.listen(8080, function() {
    console.log('serverFire')
})