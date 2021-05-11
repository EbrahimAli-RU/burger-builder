const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const app = require('./app')

//Connect Database
const DB = process.env.MONGODB_LOCAL_URL
const URI = `mongodb+srv://ebrahim:qtp8d4ep@burger-builder.lkdck.mongodb.net/burger-builder?retryWrites=true&w=majority`
mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log(`DB connect Successfully`)
}).catch(err => {
    console.log(err)
    console.log(`DB connection fail`)
});

const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})


