var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const bcrypt = require('bcryptjs')

var userSchema = new Schema({
    name: String,
    email: String,
    password: String,
});

userSchema.pre('save', function (next) {
    const salt = bcrypt.genSaltSync(10)
    this.password = bcrypt.hashSync(this.password, salt)
    next()
})

var User = mongoose.model('User', userSchema)

module.exports = User