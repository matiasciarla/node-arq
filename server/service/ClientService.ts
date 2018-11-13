import SQLManager from '../config/db';
import ClientDao from '../dao/ClientDao';

class ClientService {

    private clientDao:ClientDao;
    private SQLManager:SQLManager;

    constructor(){
        this.clientDao = new ClientDao();
        this.SQLManager = SQLManager.getInstance();
    }

    public getClients:Function = (callback:Function, callbackError:Function) => {
        this.clientDao.getClients((response:any) => {
            callback(response);
        }, (err:any) => {
            callbackError(err);
        });
        
    }

    public createClient:Function = (client:any, callback:Function, callbackError:Function) => {
        this.SQLManager.getConnection().transaction().then((transaction:any) => {
            this.clientDao.createClient(client, transaction, (response:any) => {
                transaction.commit();
                callback(response);
            }, (err:any) => {
                transaction.rollback();
                callbackError(err);
            });
        });
    }

   
}

export default ClientService;