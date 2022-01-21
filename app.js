const express = require('express');

const app = express();

const tasks = require('./src/routes/tasks')

const connectDB = require('./src/db/connect')

require('dotenv').config()


//middleware

app.use(express.json())

//routes
app.get('/', (req, res) => {
    return res.send('Hello, friend');
})

app.use('/api/v1/tasks', tasks)

const port = 3000;

const start = async () => {
    try {
        app.listen(port, () => {
            console.log(`Server is running in port ${port}`);
        })
        await connectDB(process.env.MONGO_URI)
        
    } catch (error) {
        console.error('Something is wrong', error)
    }
}

start()