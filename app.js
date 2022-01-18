const express = require('express');

const app = express();

const tasks = require('./src/routes/tasks')

const port = 3000;


//middleware

app.use(express.json())

//routes
app.get('/', (req, res) => {
    return res.send('Hello, friend');
})

app.use('/api/v1/tasks', tasks)

app.listen(port, () => {
    console.log(`Server is running in port ${port}`);
})