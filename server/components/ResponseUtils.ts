

class ResponseUtils {

    private unauthorized:string = "Unauthorized";
    private forbidden:string = "Forbidden";
    private badRequest:string = "Bad Request";
    private internalError:string = "Internal Server Error";

    public sendCreate:Function = (res:any) => {
        res.status(201);
        res.send();
    }

    public sendEmpty:Function = (res:any) => {
        res.status(204);
        res.send();
    }

    public sendQuery:Function = (res:any, data:any, page:number, size:number) => {
        let response:any = {};
        let metadata:any = {total:data.count, page: page, size: size};

        response.metadata = metadata;
        response.data = data.rows;

        res.status(200);
        res.send(response);
    }

    public sendGenericSuccess:Function = (res:any, data:any) => {
        res.status(200);
        res.send(data);
    }

    public sendInvalidToken:Function = (res:any, message:string, code:string):void => {
        let response:any = {};
        response.type = this.unauthorized;
        response.message = message;
        response.code = code;
        res.status(401);
        res.send(response);
    }

    public sendForbidden:Function = (res:any, message:string, code:string):void => {
        let response:any = {};
        response.type = this.forbidden;
        response.message = message;
        response.code = code;
        res.status(403);
        res.send(response);
    }

    public sendInvalidReq:Function = (res:any, message:string, code:string):void => {
        let response:any = {};
        response.type = this.badRequest;
        response.message = message;
        response.code = code;
        res.status(400);
        res.send(response);
    }

    public sendInternalError:Function = (res:any, message:string):void => {
        let response:any = {};
        response.type = this.internalError;
        response.message = message;
        response.code = 0;
        res.status(500);
        res.send(response);
    }

}

export default ResponseUtils;