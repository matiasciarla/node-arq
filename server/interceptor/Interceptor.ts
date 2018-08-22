let jwt = require('jsonwebtoken');
import JwtUtils from '../components/JwtUtils';
import { decode } from 'punycode';

class Interceptor {
 
    public intercept: Function = (req:any, res:any, next: Function) => {

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
                res.status(401);
                res.send('Invalid Token');
            });

        } else {
            next();
        }
    }

    private isInterceptable: Function = (req: any) => {
        let interceptable = req.originalUrl.includes('api');

        return interceptable;
    }
}

export default new Interceptor();


