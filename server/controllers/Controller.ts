import ClientService from "../service/ClientService";
import ResponseUtils from "../components/ResponseUtils";


class Controller {

    private clientService:ClientService;
    private responseUtils:ResponseUtils;

    constructor(){
        this.clientService = new ClientService();
        this.responseUtils = new ResponseUtils();
    }

	public createClient:Function = (req:any, res:any) => {
        this.clientService.createClient(req.body, (response:any) => {
            this.responseUtils.sendCreate(res);
        }, (err:any) => {
            this.responseUtils.sendInternalError(res, err);
        });        
    }

    public getClients:Function = (req:any, res:any) => {
        this.clientService.getClients((response:any) => {
            this.responseUtils.sendGenericSuccess(res, response);
        }, (err:any) => {
            this.responseUtils.sendInternalError(res, err);
        });
    }

}

export default Controller;
