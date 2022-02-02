const User = require('../models/User');
const { JWT_TOKEN_SECRET } = require('../constants');
const jwt = require('../utils/jwtUtility');
const validator = require('../utils/validator');

const USERNAME_LENGTH = 3;
const PASSWORD_LENGTH = 3;



const login = async (userData) => {
    const { username, password } = userData;
    //Check to see if user exists

    const pattern = new RegExp(`^${username}$`, 'i');
    let user = await User.findOne({ username: { $regex: pattern } })
    if (!user) {
        throw new Error('Username or password invalid');
    }
    //Validate the provided password
    let passwordIsValid = await user.validatePassword(password);
    if (!passwordIsValid) {
        throw new Error('Username or password invalid');
    }
    //TODO: create token
    let payload = {
        _id: user._id,
        username: user.username
    };

    return jwt.sign(payload, JWT_TOKEN_SECRET);
}

const register = async (userData) => {
    const { username, password, repeatPassword } = userData;
    
    let err = { errors: [], name: 'CustomError' } //jank way of doing this

    //Check if user already exists
    const pattern = new RegExp(`^${username}$`, 'i');
    let user = await User.findOne({ username: { $regex: pattern } })
    if (user) {
        throw new Error('Username already exists');
    }
    //Validate input
    //if (!validator.isEmail(email)) errors.push('Please enter a valid email');
    if(username.length < USERNAME_LENGTH){
        if(username.length <1){
            err.errors.push('Username is required');
        }else{
            err.errors.push(`Username must be at least ${USERNAME_LENGTH} characters`);
        }
    }
    if(password.length < PASSWORD_LENGTH){
        if(password.length <1){
            err.errors.push('Password is required');
        }else{
            err.errors.push(`Password must be at least ${PASSWORD_LENGTH} characters`);
        }
    }

    if (password !== repeatPassword) err.errors.push('Passwords do not match');
    if (err.errors.length > 0) throw err;

    return User.create({ username, password, repeatPassword });
}


module.exports = {
    login,
    register,
}