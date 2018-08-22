import questions from '../structures/questionStructure';
import answers from '../structures/answerStructure';

class Controller {

    askQuestion = (req, res) => {
    
        if (!req.body.title || req.body.title.length < 3) {
            res.status(400).send('Please add the title for your question');
            return;
        }
    
        const question = {
            id: questions.length + 1,
            title: req.body.title
        };
        questions.push(question);
        res.send(question);
    }
}

export default new Controller;