const passport = require("passport");

app.use(passport.initialize());
app.use(passport.session());

passport.use(UserDetails.createStrategy());

passport.serializeUser(UserDetails.serializeUser());
passport.deserializeUser(UserDetails.deserializeUser());
