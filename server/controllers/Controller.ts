import ClientService from "../service/ClientService";
import ResponseUtils from "../components/ResponseUtils";
import UserService from "../service/UserService";


class Controller {

    private clientService:ClientService;
    private responseUtils:ResponseUtils;
    private userService:UserService;

    constructor(){
        this.clientService = new ClientService();
        this.responseUtils = new ResponseUtils();
        this.userService = new UserService();
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

    public createUser:Function = (req:any, res:any) => {
        this.userService.createUser(req.body, () => {
            this.responseUtils.sendCreate(res);
        }, (err:any) => {
            this.responseUtils.sendInternalError(res, err, 0);
        })
    }

    public findUsers:Function = (req:any, res:any) => {
        this.userService.findAll((users:any) => {
            this.responseUtils.sendGenericSuccess(res, users);
        });
    }

}

export default Controller;
