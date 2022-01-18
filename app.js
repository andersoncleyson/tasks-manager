const express = require('express');

const app = express();

const port = 3000;

//routes
app.get('/', (req, res) => {
    return res.send('Hello, friend');
})

app.listen(port, () => {
    console.log(`Server is running in port ${port}`);
})