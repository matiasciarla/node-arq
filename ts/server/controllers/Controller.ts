import ClientService from "../service/ClientService";


class Controller {

	public createClient:Function = (req:any, res:any) => {
        ClientService.createClient(req.body, (response:any) => {
            res.send(response);
        }, (err:any) => {
            res.status(500);
            res.send(err);
        });        
    }

    public getClients:Function = (req:any, res:any) => {
        ClientService.getClients((response:any) => {
            res.send(response);
        }, (err:any) => {
            res.status(500);
            res.send(err);
        });
    }

}

export default new Controller();
