const express = require('express');
const path = require('path');
const dotenv = require('dotenv')
const result = dotenv.config()

if (result.error) {
    throw result.error
}

//init app 
const app = express();

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