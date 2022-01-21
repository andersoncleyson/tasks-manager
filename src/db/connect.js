const mongoose = require('mongoose')


const connectDB = (url) => {
    return mongoose.connect(url, () => {
        console.log("CONNECTED TO THE DB")
    })
}

module.exports = connectDB

