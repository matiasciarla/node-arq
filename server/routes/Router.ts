import Controller from '../controllers/Controller';

class Router {

    private routes: any;

    public init(express: any) {
        this.routes = express.Router();

        this.routes.route('/clients')
        .get(Controller.getClients)
        .post(Controller.createClient);
               

    }

    public getRoutes(){
        return this.routes;
    }

}

export default new Router();
