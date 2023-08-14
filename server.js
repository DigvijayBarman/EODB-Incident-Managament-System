const express = require('express')
const morgan = require('morgan')
const app = express();
const dotenv = require('dotenv')
const path =require('path')
const bodyparser = require('body-parser')
const connectDB = require('./server/database/connection')

dotenv.config({
    path: 'config.env'
})

const PORT = process.env.PORT || 8000;

app.use(morgan('tiny'))

connectDB();

app.use(bodyparser.urlencoded({extended: true}))

app.set('view engine', 'ejs')
// app.set('views', path.resolve(__dirname, ""))

//load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

app.use('/', require('./server/routes/router'))


app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})