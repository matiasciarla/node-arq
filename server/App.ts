let express = require('express');
let bodyParser = require('body-parser');
let methodOverride = require('method-override');
let path = require('path');

import Router from './routes/Router';
import Interceptor from './interceptor/Interceptor';
import Health from './routes/Health';

// Create and configure ExpressJS.
class App {

    private express:any;
    private router:Router;
    private health:Health;
    private intercept:Function;

    constructor() {
        this.router = new Router();
        this.health = new Health();
        this.intercept = new Interceptor().intercept;

        this.express = express();
        this.middleware();
        this.routes();
    }

    // Config Express middleware.
    private middleware(): void {
        this.express.use(bodyParser.json({limit: "50mb"}));
        this.express.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
        this.express.use(bodyParser.json({ type: 'application/vnd.api+json' }));
        this.express.use(methodOverride('X-HTTP-Method-Override'));
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    // Init Routes.
    private routes(): void {
        this.express.use(this.intercept);
        this.router.init(express);
        this.health.init(express);
        this.express.use('/api', this.router.getRoutes());
        this.express.use('/health', this.health.getRoutes());
    }

    public getExpress:Function = () => {
        return this.express;
    }
}

export default App;
