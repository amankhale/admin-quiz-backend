const mongoose = require('mongoose');

const quizSchema = mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    answers: [
        {
            content: {
                type: String,
                required: true
            },
            isCorrect: {
                type: Boolean,
                required: true
            },
            points: {
                type: Number,
                required: true
            }
        }
    ]
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const QUIZ_MODEL = new mongoose.model('quiz', quizSchema);

module.exports.QUIZ_MODEL = QUIZ_MODEL;
module.exports.quizSchema = quizSchema;