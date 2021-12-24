const cookieParser = require('cookie-parser');
const express = require('express');
const mongoose = require('mongoose');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');
const authRouter = require('./routes/authRoutes');

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());//converts any data that user sends to javascript object and makes available through req object.
app.use(cookieParser());
// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb+srv://Goutham:goutham123@cluster0.gw0tf.mongodb.net/node-auth';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
app.get('*', checkUser);// '*' is nothing but all routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', requireAuth,(req, res) => res.render('smoothies'));
app.use(authRouter);

//cookie
