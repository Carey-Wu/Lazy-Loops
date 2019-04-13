const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


  app.use(express.static('public'));
  app.use(express.session({ secret: 'keyboard cat' }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(app.router);


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


  // Add routes, both API and view
  var db = require("../models");

  // Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
  passport.use(new LocalStrategy(
    // Our user will sign in using username
    function (username, password, done) {
      console.log("Verifying " + username + " " + password);

      db.User.findOne({
        where: {
          name: username
        }
      }).then(function (dbUser) {
        // If there's no user with the given user name
        if (!dbUser) {
          return done(null, false, {
            message: "Incorrect user name."
          });
        }
        // If there is a user with the given email, but the password the user gives us is incorrect
        else if (!dbUser.validPassword(password)) {
          return done(null, false, {
            message: "Incorrect password."
          });
        }
        // If none of the above, return the user
        return done(null, dbUser);
      });

    }
  ));




  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });


  app.use(routes);

  // Connect to the Mongo DB
  mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/Lazy_Loops",
    { useNewUrlParser: true }
  );

  // Start the API server
  app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });