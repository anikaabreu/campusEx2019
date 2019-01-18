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

//init app
const app = express();

//bring in models
let testUser = require('./models/testUser')

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