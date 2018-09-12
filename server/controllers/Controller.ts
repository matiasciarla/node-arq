import ClientService from "../service/ClientService";
import ResponseUtils from "../components/ResponseUtils";


class Controller {

    private clientService:ClientService;

    constructor(){
        this.clientService = new ClientService();
    }

	public createClient:Function = (req:any, res:any) => {
        this.clientService.createClient(req.body, (response:any) => {
            ResponseUtils.sendCreate(res);
        }, (err:any) => {
            ResponseUtils.sendInternalError(res, err);
        });        
    }

    public getClients:Function = (req:any, res:any) => {
        this.clientService.getClients((response:any) => {
            ResponseUtils.sendGenericSuccess(res, response);
        }, (err:any) => {
            ResponseUtils.sendInternalError(res, err);
        });
    }

}

export default Controller;
