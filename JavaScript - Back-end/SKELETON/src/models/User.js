const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { SALT_ROUNDS } = require('../constants');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        minlength: [3, 'Username must be at leats 3 characters long'],
        validate: [/^[a-zA-Z0-9]+$/, 'Username can contain only alphanumeric characters']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [3, 'Password must be at leats 3 characters long'],
        validate: [/^[a-zA-Z0-9]+$/, 'Password can contain only alphanumeric characters']
    },
});

//check if user exists

//Hash the password
userSchema.pre('save', function (next) {
    return bcrypt.hash(this.password, SALT_ROUNDS)
        .then(hash => {
            this.password = hash;
            return next();
        });
})

//Validate password
userSchema.methods.validatePassword = function (password){
    return bcrypt.compare(password, this.password);
}

const User = mongoose.model('User', userSchema);

module.exports = User;