import SQLManager from '../database/SQLManager';
import ClientDAO from '../dao/ClientDAO';

class ClientService {

    private clientDAO:ClientDAO;
    private SQLManager:SQLManager;

    constructor(){
        this.clientDAO = new ClientDAO();
        this.SQLManager = SQLManager.getInstance();
    }

    public getClients:Function = (callback:Function, callbackError:Function) => {
        this.clientDAO.getClients((response:any) => {
            callback(response);
        }, (err:any) => {
            callbackError(err);
        });
        
    }

    public createClient:Function = (client:any, callback:Function, callbackError:Function) => {
        this.SQLManager.getConnection().transaction().then((transaction:any) => {
            this.clientDAO.createClient(client, transaction, (response:any) => {
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