import SQLManager from '../database/SQLManager';

import IndexModels from '../models/IndexModels';

class ClientDAO {

    private indexModels:IndexModels;

    constructor(){
        this.indexModels = new IndexModels();
    }

    public getClients: Function = (callback:Function, callbackError:Function) => {
        this.indexModels.getClient().findAll().then((clients:any[]) => {
            callback(clients);
        }).catch((err:any) => {
            callbackError(err);
        });
    }

    public createClient:Function = (client:any, transaction:any, callback:Function, callbackError:Function) => {
        this.indexModels.getClient().create(client, {transaction: transaction}).then((response:any) => {
            callback(response);
        }).catch( (err:any) => {
            callbackError(err);
        });
    }
}

export default ClientDAO;