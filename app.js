// Express
const express = require('express')
// Express Layouts
const expressLayouts = require('express-ejs-layouts')
// MongoDB
const mongoose = require('mongoose')
// Express Session
const session = require('express-session')
// Passport
const passport = require('passport')
// Flash
const flash = require('connect-flash')
// Path
const path = require('path')
// Initialize App
const app = express()

// MongoDB Connection
const db = require('./config/keys').MongoURI
// @Connect MongoDB
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err))

// Passport Configuration
require('./config/passport')(passport)

// BodyParser
app.use(express.urlencoded({ extended: false }))
// Public Folder
app.use(express.static(path.join(__dirname, 'public')))

// EJS Middleware
app.use(expressLayouts)
app.set('view engine', 'ejs')

// Setting up Session
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}))
// Middleware Flash
app.use(flash())
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    res.locals.error = req.flash('error')
    res.locals.success_post = req.flash('success_post')
    next()
})


// Passport Middleware
app.use(passport.initialize())
app.use(passport.session())

// Setting up Routes
// @Home Routes
app.use('/', require('./routes/index'))
// @Users Routes
app.use('/users', require('./routes/users'))



// Setting PORT
const PORT = process.env.PORT || 5000

app.listen(PORT, () => { console.log("Server Started on port", PORT) })