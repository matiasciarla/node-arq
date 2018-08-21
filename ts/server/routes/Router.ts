import QueryController from '../controllers/QueryController';
import AbmController from '../controllers/AbmController';
import LoginController from '../controllers/LoginController';

class Router {

    private routes: any;

    public init(express: any) {
        this.routes = express.Router();

        this.routes.route('/clients')
        .get(QueryController.getClients)
        .post(AbmController.createClient);
               

    }

    public getRoutes(){
        return this.routes;
    }

}

export default new Router();
