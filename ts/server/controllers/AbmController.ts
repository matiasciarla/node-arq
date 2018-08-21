import ClientService from "../service/ClientService";


class AbmController {

	public createClient:Function = (req:any, res:any) => {
        ClientService.createClient(req.body, (response:any) => {
            res.send(response);
        }, (err:any) => {
            res.status(500);
            res.send(err);
        });        
    }

}

export default new AbmController();
