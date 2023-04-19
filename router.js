const express = require('express');
const cors = require('cors');

const quizRoutes = require('./routes/quiz');

module.exports = (app) => {
    app.use(express.json());
    // for CORS errors
    app.use(cors({
        credentials: true,
        exposedHeaders: 'Authorization'
    }));
    app.use('/admin/quiz', quizRoutes);
}