const express = require('express')
const app = express();
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')

const authRouter = require('./router/user')
const ingredientRouter = require('./router/ingredient')
const orderRouter = require('./router/order')
const globalErrorHandler = require('./controller/errorController')
const appError = require('./utils/appError')
const email = require('./utils/email')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

if (process.env.NODE_ENV === "development") {
    app.use(morgan('dev'))
}



app.use('/api/v1/user', authRouter)
app.use('/api/v1/ingredient', ingredientRouter)
app.use('/api/v1/order', orderRouter)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client', 'build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    });

}


app.all(`*`, (req, res, next) => {
    next(new appError(`Can't find ${req.originalUrl} on this server`, 404))
})

app.use(globalErrorHandler)

module.exports = app;