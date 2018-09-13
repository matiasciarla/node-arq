import EntityManager from '../config/db.js';

import IndexModels from '../models/IndexModels';

class ClientDao {

    private indexModels:IndexModels;

    constructor(){
        this.indexModels = new IndexModels();
    }

    public getClients: Function = (callback:Function, callbackError:Function) => {
        this.indexModels.client.findAll().then((clients:any[]) => {
            callback(clients);
        }).catch((err:any) => {
            callbackError(err);
        });
    }

    public createClient:Function = (client:any, callback:Function, callbackError:Function) => {
        this.indexModels.client.create(client).then((response:any) => {
            callback(response);
        }).catch( (err:any) => {
            callbackError(err);
        });
    }
}

export default ClientDao;