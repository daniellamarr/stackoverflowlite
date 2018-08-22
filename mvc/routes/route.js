import Controller from "../controllers/controller";

const Route = (app) => {

    app.post('/api/v1/questions/:id/answers', Controller.postAnswer)

}

export default Route;