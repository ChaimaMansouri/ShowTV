const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');
const FacebookStrategy = require('passport-facebook').Strategy;
const app = express();
require('dotenv').config();


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); 
app.use(express.static(__dirname + '/public')); 



app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true
}));


app.use(passport.initialize());
app.use(passport.session());


passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  function(token, tokenSecret, profile, done) {
    
    return done(null, profile);
  }
));


app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
   
    res.redirect('/');
  }
);



passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_CLIENT_ID,
  clientSecret: process.env.FACEBOOK_CLIENT_SECRET, 
  callbackURL: 'http://localhost:3000/auth/facebook/callback',
  profileFields: ['id', 'displayName', 'photos', 'email'] 
},
function(accessToken, refreshToken, profile, done) {
  
  return done(null, profile);
}
));

app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback', 
passport.authenticate('facebook', { failureRedirect: '/' }),
function(req, res) {

  res.redirect('/');
}
);




app.get('/', (req, res) => {
    res.render('home', { user: req.user });
});
app.get('/Serie', (req, res) => {
    res.render('Serie', { user: req.user });
});
app.get('/list', (req, res) => {
    res.render('list', { user: req.user });
});
app.get('/film', (req, res) => {
    res.render('Film', { user: req.user });
});
app.get('/Anime', (req, res) => {
    res.render('Anime', { user: req.user });
});
app.get('/Animation', (req, res) => {
    res.render('Animation', { user: req.user });
});
app.get('/video_anime', (req, res) => {
  res.render('./Video_page/video_anime', { user: req.user });
});


app.get('/Video%20page/video_Des', (req, res) => {
  res.render('./Video_page/video_Des', { user: req.user });
});
app.get('/Video%20page/video_film', (req, res) => {
  res.render('./Video_page/video_film', { user: req.user });
});
app.get('/Video%20page/video_ser', (req, res) => {
  res.render('./Video_page/video_ser', { user: req.user });
});
app.get('/Video%20page/video_serie', (req, res) => {
  res.render('./Video_page/video_serie', { user: req.user });
});




app.get('/Harry/video_hr1', (req, res) => {
  res.render('./Harry/video_hr1', { user: req.user });
});
app.get('/Harry/video_hr2', (req, res) => {
  res.render('./Harry/video_hr2', { user: req.user });
});
app.get('/Harry/video_hr3', (req, res) => {
  res.render('./Harry/video_hr3', { user: req.user });
});
app.get('/Harry/video_hr4', (req, res) => {
  res.render('./Harry/video_hr4', { user: req.user });
});
app.get('/Harry/video_hr5', (req, res) => {
  res.render('./Harry/video_hr5', { user: req.user });
});
app.get('/Harry/video_hr6', (req, res) => {
  res.render('./Harry/video_hr6', { user: req.user });
});
app.get('/Harry/video_hr7', (req, res) => {
  res.render('./Harry/video_hr7', { user: req.user });
});


// بدء الخادم
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
