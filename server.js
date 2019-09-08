const express = require('express');
const app = express();
const mongoose = require('./db/mongoose');
const userRoutes = require('./routes/user-routes');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('welcome!');
});

app.use('/user', userRoutes)

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});