import Controller from "../controllers/controller";

const Route = (app) => {

    app.post('/api/v1/questions', Controller.askQuestion)

}

export default Route;