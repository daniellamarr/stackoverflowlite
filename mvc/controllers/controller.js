import questions from '../structures/questionStructure';
import answers from '../structures/answerStructure';

class Controller {

    postAnswer = (req, res) => {
    
        if (!req.body.reply || req.body.reply.length < 3) {
            res.status(400).send('Please add a reply to this question');
            return;
        }
    
        const answer = {
            id: answers.length + 1,
            ref: req.params.id,
            reply: req.body.reply
        };
        answers.push(answer);
        res.send(answer);
    }
}

export default new Controller;