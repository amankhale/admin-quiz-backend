const express = require('express');
const router = express.Router();
const { QUIZ_MODEL } = require('../model/quiz');

router.post('/create-question', async (req, res) => {

    try {

        const { body } = req;
        if (!body['question']) {
            return res.status(400).json({
                status: 400,
                message: 'Please enter question'
            });
        } else if (!body['answers']?.length || body['answers']?.length <= 1){
            return res.status(400).json({
                status: 400,
                message: 'Please enter atleast 2 answers'
            });
        }
        let payload = Object.assign({
            question: req.body.question,
            answers: req.body.answers
        });

        let quiz = new QUIZ_MODEL(payload);
        await quiz.save();

        return res.status(200).json({
            status: 200,
            message: 'Question created successfully'
        });

    } catch (error) {
        console.log(error);
    }
});

module.exports = router;

