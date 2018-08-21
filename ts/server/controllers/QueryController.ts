import ClientDao from "../dao/ClientDao";
import ClientService from "../service/ClientService";


class QueryController {

    public getClients:Function = (req:any, res:any) => {
        ClientService.getClients((response:any) => {
            res.send(response);
        }, (err:any) => {
            res.status(500);
            res.send(err);
        });
    }
    
}

export default new QueryController();
