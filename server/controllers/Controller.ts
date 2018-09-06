import ClientService from "../service/ClientService";
import ResponseUtils from "../components/ResponseUtils";


class Controller {

	public createClient:Function = (req:any, res:any) => {
        ClientService.createClient(req.body, (response:any) => {
            ResponseUtils.sendCreate(res);
        }, (err:any) => {
            ResponseUtils.sendInternalError(res, err);
        });        
    }

    public getClients:Function = (req:any, res:any) => {
        ClientService.getClients((response:any) => {
            ResponseUtils.sendGenericSuccess(response);
        }, (err:any) => {
            ResponseUtils.sendInternalError(res, err);
        });
    }

}

export default new Controller();
