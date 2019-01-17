const express = require('express');
const path = require('path');

//init app
const app = express();

//views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//home route
app.get('/', function (req, res) {
    let users = [
        {
            id: 1,
            user: 'Joe',
            pins: 'flowers'
        },
        {
            id: 2,
            user: 'Jenny',
            pins: 'books'
        },
        {
            id: 3,
            user: 'Jill',
            pins: 'fries'
        }
    ]
    res.render('index', {
        title: 'Hello',
        users: users
    });
})

// add route

app.get('/users', function(req, res){
    res.render('users', {
        title: 'Users by Pins'
    });
})

app.listen(8080, function(){
    console.log('serverFire')
})