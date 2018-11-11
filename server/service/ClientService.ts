import EntityManager from '../config/db';
import ClientDao from '../dao/ClientDao';

class ClientService {

    private clientDao:ClientDao;
    private entityManager:EntityManager;

    constructor(){
        this.clientDao = new ClientDao();
        this.entityManager = EntityManager.getInstance();
    }

    public getClients:Function = (callback:Function, callbackError:Function) => {
        this.clientDao.getClients((response:any) => {
            callback(response);
        }, (err:any) => {
            callbackError(err);
        });
        
    }

    public createClient:Function = (client:any, callback:Function, callbackError:Function) => {
        this.entityManager.getConnection().transaction().then((transaction:any) => {
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