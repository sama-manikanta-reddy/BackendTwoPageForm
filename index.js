const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const corsConfig = {
    origin: 'http://localhost:3000',
    credentials: true
};

mongoose.connect(process.env.DB_LINK)
    .then(() => {
        console.log('DB CONNECTED')
    }).catch((e) => {
        console.log('Error : ', e);
    });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsConfig));
app.use(require('./Router'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server started on port ${PORT}`));