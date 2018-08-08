const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
    name: String,
    email: String,
    age: Number,
    password: String,
    createdOn: {
        type: Number,
        default: new Date().getTime()
    }
}, 
{ versionKey: false });

module.exports = mongoose.model('users', usersSchema);