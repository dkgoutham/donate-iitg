const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    email:{
        type: String,
        unique: true,
        lowercase: true,
        required: [true, "Please enter an email"],//the second parameter is thrown when the user doesnt provide an email.
        validate: [/*(val)=>{}*/ isEmail, "Please provide a valid email"]//val is the email that user entered. isEmail is a third party app to check for the validity of the entered email.
    },
    password:{
        type: String,
        required: [true,"Please enter a password"],
        minlength: [6, "Minimum password length is 6 characters"]
    }
});
// //fire this function once a user is saved in db
// userSchema.post('save', function(doc, next){
//     console.log(doc);
//     next();
// });

//fire function before saving it to db.
//arrow function doesnt allow you to use 'this' keyword, as you dont get access to it.
//pre hook can be used to hash password.
userSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

//static method to login user
userSchema.statics.login = async function(email, password){
    const user = await this.findOne({email});
    if(user){
        const auth = await bcrypt.compare(password, user.password);
        if(auth){
            return user;
        }
        throw Error("Incorrect Password");
    }
    throw Error("Incorrect Email")
}


const User = mongoose.model('user', userSchema);
module.exports = User;