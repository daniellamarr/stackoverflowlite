import Controller from "../controllers/controller";

const Route = (app) => {

app.get('/api/v1/questions', Controller.getAllQuestions);

}

export default Route;