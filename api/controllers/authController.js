const User = require('../models/User');
const jwt = require('jsonwebtoken');

//handle errors
const handleError = (err)=>{
    console.log(err.message)
    // console.log(err.code);
    let error = {
        email: "",
        password: ""
    }
    //incorrect email
    if(err.message === 'Incorrect Email'){
        error.email = 'This email is not registered';
    }
    //incorrect password
    if(err.message == 'Incorrect Password'){
        error.password = "Incorrect Password";
    }


    //the case where a user has already created an account
    if(err.code===11000){
        error.email = "This email is already registered";
        return error;
    }
    //validation
    if(err.message.includes("user validation failed")){
        Object.values(err.errors).forEach(({properties})=>{
            error[properties.path] = properties.message;
        });
    }
    return error;
}
const time = 3*60*60*24;//3 days in sec
const createToken = (id)=>{
    return jwt.sign({id}, 'auth',{
        expiresIn: time
    });
}

module.exports.signup_get = (req, res)=>{
    res.render('signup');
};
module.exports.login_get = (req, res)=>{
    res.render('login');
};
module.exports.signup_post = async (req, res)=>{
    const {email, password} = req.body;
    try{
        const user = await User.create({email, password});
        const token = createToken(user._id);
        res.cookie('jwt', token, {httpOnly: true, maxAge: 1000*time});
        res.status(201).json({user: user._id});
    }
    catch(err){
        const error = handleError(err);
        res.status(400).json({error});
    }

};
module.exports.login_post = async (req, res)=>{
    const {email, password} = req.body;
    try{
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.cookie('jwt', token, {httpOnly: true, maxAge: 1000*time});
        res.status(200).json({user: user._id});
    }
    catch(err){
        const error = handleError(err);
        // console.log(error);
        res.status(400).json({error});
    }
};

module.exports.logout_get = (req, res)=>{
    res.cookie('jwt', '', {maxAge: 1});
    res.redirect('/');
}
//exporting the callback functions
