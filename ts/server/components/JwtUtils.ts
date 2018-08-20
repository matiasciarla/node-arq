let jwt = require('jsonwebtoken');

class JwtUtils {

    private secret:string = 'secret_123#';
    private expires:number = 86400; // expires in 24 hours

    public generateToken: Function = (firstName:string, lastName:string, grupo:string):string => {
        let claims:any = {};
        claims.firstName = firstName;
        claims.lastName = lastName;
        claims.grupo = grupo;


        let token:string = jwt.sign(claims, this.secret, {
            expiresIn: this.expires
        });

        return token;
    }

    public verify: Function = (token:string, callback: Function, callbackError: Function):void => {
        jwt.verify(token, this.secret, (err:any, decoded:any) => {
            if (err) {
                callbackError(err);
            } else {
                callback(decoded);
            }
        });
    }

}

export default new JwtUtils();