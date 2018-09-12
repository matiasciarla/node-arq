import Controller from '../controllers/Controller';

class Router {

    private routes: any;
    private controller:any;

    constructor(){
        this.controller = new Controller();
    }

    public init(express: any) {
        this.routes = express.Router();

        this.routes.route('/clients')
        .get(this.controller.getClients)
        .post(this.controller.createClient);
               

    }

    public getRoutes(){
        return this.routes;
    }

}

export default new Router();
