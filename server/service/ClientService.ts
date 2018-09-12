import ClientDao from '../dao/ClientDao';

class ClientService {

    private clientDao:ClientDao;

    constructor(){
        this.clientDao = new ClientDao();
    }

    public getClients:Function = (callback:Function, callbackError:Function) => {
        this.clientDao.getClients((response:any) => {
            callback(response);
        }, (err:any) => {
            callbackError(err);
        });
    }

    public createClient:Function = (client:any, callback:Function, callbackError:Function) => {
        this.clientDao.createClient(client, (response:any) => {
            callback(response);
        }, (err:any) => {
            callbackError(err);
        });
    }
}

export default ClientService;