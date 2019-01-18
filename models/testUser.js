let mongoose = require('mongoose');
let Schema = mongoose.Schema;
//create a schema

let testUserSchema = new Schema({
    user: String,
    pin: String
})


let testUser = module.exports = mongoose.model('testUser', testUserSchema, 'testUsers');

//model name, schema, collection name