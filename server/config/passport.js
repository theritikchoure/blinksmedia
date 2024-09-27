// config/passport.js
const passport = require("passport");
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");
const User = require("../models/users.model"); // Import your User model

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extract the JWT from the Authorization header
  secretOrKey: process.env.JWT_SECRET, // Secret to verify JWT
};

passport.use(
  new JwtStrategy(options, async (jwt_payload, done) => {
    try {
      const user = await User.findById(jwt_payload.id); // Find user by ID from the token payload
      if (user) {
        return done(null, user); // Pass the user to the next middleware
      }
      return done(null, false); // No user found, return false
    } catch (error) {
      return done(error, false);
    }
  })
);

module.exports = passport;
