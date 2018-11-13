import SQLManager from '../database/SQLManager';

class Health {

    private routes: any;
    private SQLManager:SQLManager;

    constructor(){
        this.SQLManager = SQLManager.getInstance();
    }

    public init:Function = (express:any) => {
        this.routes = express.Router();

        this.routes.get('/', (req: any, res: any) => {
            
            let response:any = {};

            response.healthSummary = {};
            response.dependencies = [];

            let dependency: any = {};
            dependency.dependencyDescription = 'Base de datos';


            this.SQLManager.getConnection().authenticate()
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

export default Health;