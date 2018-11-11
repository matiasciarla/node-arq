let jwt = require('jsonwebtoken');
import JwtUtils from '../components/JwtUtils';
import ResponseUtils from '../components/ResponseUtils';

class Interceptor {

    private responseUtils:ResponseUtils;

    constructor(){
        this.responseUtils = new ResponseUtils();
    }

 
    public intercept:Function = (req:any, res:any, next: Function) => {

        if(this.isInterceptable(req)){
            let token:string = '';

            if(req.headers && req.headers.authorization){
                token = req.headers.authorization.toString();    
            }

            JwtUtils.verify(token, (decoded:any) => {
                console.log('========================= DECODE ======================');
                console.log(decoded);
                next();
            }, (err:any) => {
                console.log('========================= ERROR ======================');
                console.log(err);
                this.responseUtils.sendInvalidToken(res, 'Invalid Token', 401);
            });

        } else {
            next();
        }
    }

    private isInterceptable: Function = (req: any) => {
        // Uncomment to intercept api
        // let interceptable = req.originalUrl.includes('api');
        let interceptable = false;

        return interceptable;
    }
}

export default Interceptor;


