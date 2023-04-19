'use strict';

const mongoose = require('mongoose');
require('dotenv').config();

module.exports = (app) => {
    const PORT = process.env.PORT || 5000;
    const DB_URL = process.env.DB_URL;

    const MONGO_OPTIONS = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
    mongoose.connect(DB_URL, MONGO_OPTIONS).then(() => {
        app.listen(PORT);
        console.log(`Server started at ${PORT}`);
        console.log('Connected to Database.');
    }).catch((error)=>{
        console.log(error);
    })
}