import express from 'express'
import config from './config/index.js'
import router from './router/index.js'
import mongoose from 'mongoose'
import {allowCrossDomain} from "./middlware/main.js";
mongoose.Promise = global.Promise
const app = express()
app.use(allowCrossDomain)
app.use(router)
app.listen(config.PORT, () => {
    console.log(`Server api-NORT has been started on port ${config.PORT}`)
})

app.use(function (req, res) {
    res.status(404).send('page not found')
})
mongoose.connect(config.db, function (err) {
    if (!err) {
        console.log('Mongoose connection success!')
    } else {
        console.log(err)
    }
})



