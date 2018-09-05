const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20")
const FacebookStrategy = require("passport-facebook")
const TwitterStrategy = require("passport-twitter")
const mongoose = require("mongoose")
const keys = require("../config/keys")

const User = mongoose.model("users")

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id)

  done(null, user)
})

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id })

      if (existingUser) {
        return done(null, existingUser)
      }
      const user = await new User({ googleId: profile.id }).save()
      done(null, user)
    }
  )
)

passport.use(
  new FacebookStrategy(
    {
      clientID: keys.facebookClientID,
      clientSecret: keys.facebookClientSecret,
      callbackURL: "/auth/facebook/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ facebookId: profile.id })

      if (existingUser) {
        return done(null, existingUser)
      }
      const user = await new User({ facebookId: profile.id }).save()
      done(null, user)
    }
  )
)

passport.use(
  new FacebookStrategy(
    {
      clientID: keys.facebookClientID,
      clientSecret: keys.facebookClientSecret,
      callbackURL: "/auth/facebook/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ facebookId: profile.id })

      if (existingUser) {
        return done(null, existingUser)
      }
      const user = await new User({ facebookId: profile.id }).save()
      done(null, user)
    }
  )
)

/*passport.use(
  new TwitterStrategy(
    {
      clientID: keys.twitterClientID,
      clientSecret: keys.twitterClientSecret,
      callbackURL: "/auth/twitter/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ twitterId: profile.id })

      if (existingUser) {
        return done(null, existingUser)
      }
      const user = await new User({ twitterId: profile.id }).save()
      done(null, user)
    }
  )

)*/
