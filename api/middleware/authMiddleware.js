const jwt = require('jsonwebtoken');
const User = require('../models/User');

const requireAuth = (req, res, next)=>{
    const token = req.cookies.jwt;
    if(token){
        jwt.verify(token, 'auth', (err, decodedToken)=>{
            if(err){
                console.log(err.message);
                res.redirect('/login')
            }else{
                next();
            }
        })
    }else{
        res.redirect('/login');
    }
}

const checkUser = (req, res, next)=>{
    const token = req.cookies.jwt;
    if(token){
        jwt.verify(token, 'auth', async (err, decodedToken) => {
            if(err){
                console.log(err.message);
                res.locals.user = null;
                next()
            }else{
                let user = await User.findById(decodedToken.id);
                res.locals.user = user;
                next();
            }
        })
    }else{
        res.locals.user = null;
        next();
    }
}

module.exports = { requireAuth, checkUser}