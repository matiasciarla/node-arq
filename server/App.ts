let express = require('express');
let bodyParser = require('body-parser');
let methodOverride = require('method-override');
let path = require('path');

import Router from './routes/Router';
import Interceptor from './interceptor/Interceptor';
import Health from './routes/Health';

// Crea y configura ExpressJS.
class App {

    public express: any;
    private router:Router;
    private health:Health;

    constructor() {
        this.router = new Router();
        this.health = new Health();

        this.express = express();
        this.middleware();
        this.routes();
    }

    // Configura Express middleware.
    private middleware(): void {
        this.express.use(bodyParser.json({limit: "50mb"}));
        this.express.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
        this.express.use(bodyParser.json({ type: 'application/vnd.api+json' }));
        this.express.use(methodOverride('X-HTTP-Method-Override'));
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

  // Inicia ruteador.
    private routes(): void {
        // this.express.use(Interceptor.intercept);
        this.router.init(express);
        this.health.init(express);
        this.express.use('/api', this.router.getRoutes());
        this.express.use('/health', this.health.getRoutes());
    }
}

export default new App().express;
