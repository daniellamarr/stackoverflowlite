import questions from '../structures/questionStructure';
import answers from '../structures/answerStructure';

class Controller {

    getAllQuestions = (req, res) => {
        res.send(questions);
    }
}

export default new Controller;