import ClientDao from '../dao/ClientDao';

class ClientService {

    public getClients:Function = (callback:Function, callbackError:Function) => {
        ClientDao.getClients((response:any) => {
            callback(response);
        }, (err:any) => {
            callbackError(err);
        });
    }

    public createClient:Function = (client:any, callback:Function, callbackError:Function) => {
        ClientDao.createClient(client, (response:any) => {
            callback(response);
        }, (err:any) => {
            callbackError(err);
        });
    }
}

export default new ClientService();