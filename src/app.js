require('dotenv').config();
const express = require('express');
const db = require('./models/index');
const AuthModule = require('./routes/users.routes');
const app = express();
const port = process.env.PORT;

app.use(express.json());

db.sequelize.sync({force: false});

app.use('/api/users', AuthModule);

app.listen(port, () => {
    console.log(`Server listed on port ${port}.`);
})

module.exports = app;