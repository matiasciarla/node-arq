import EntityManager from '../config/db.js';

class Health {

    private routes: any;

    init(express:any){
        this.routes = express.Router();

        this.routes.get('/', function(req: any, res: any) {
            
            let response:any = {};

            response.healthSummary = {};
            response.dependencies = [];

            let dependency: any = {};
            dependency.dependencyDescription = 'Base de datos';


            EntityManager.authenticate()
            .then(() => {
                dependency.healthOk = true;
                response.healthSummary.healthOk = true;
                dependency.availableInformation = process.env.host;
                response.dependencies.push(dependency);
                res.send(response);
            })
            .catch((err:any) => {
                dependency.healthOk = false;
                response.healthSummary.healthOk = false;
                dependency.availableInformation = process.env.host;
                dependency.error = err;
                response.dependencies.push(dependency);
                res.send(response);
            });
        });
    }

    public getRoutes(){
        return this.routes;
    }

}

export default new Health();