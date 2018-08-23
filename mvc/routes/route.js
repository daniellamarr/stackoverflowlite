import Controller from "../controllers/controller";

const Route = (app) => {

    app.get('/api/v1/questions', Controller.getAllQuestions);

    app.get('/api/v1/questions/:id', Controller.getOneQuestion)

    app.post('/api/v1/questions', Controller.askQuestion)

    app.post('/api/v1/questions/:id/answers', Controller.postAnswer)

}

export default Route;