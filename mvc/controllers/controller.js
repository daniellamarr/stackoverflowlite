import questions from '../structures/questionStructure';
import answers from '../structures/answerStructure';

class Controller {

    getOneQuestion = (req, res) => {
        const question = questions.find(c => c.id === parseInt(req.params.id));
        if (!question) res.status(404).send('This question may have been deleted');
        res.send(question);
    }
}

export default new Controller;