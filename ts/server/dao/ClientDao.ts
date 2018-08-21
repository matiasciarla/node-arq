import EntityManager from '../config/db.js';

import IndexModels from '../models/IndexModels';

class ClientDao {

    public getClients: Function = (callback:Function, callbackError:Function) => {
        IndexModels.client.findAll().then((clients:any[]) => {
            callback(clients);
        }).catch((err:any) => {
            callbackError(err);
        });
    }

    public  createClient:Function = (client:any, callback:Function, callbackError:Function) => {
        IndexModels.client.create(client).then((response:any) => {
            callback(response);
        }, (err:any) => {
            callbackError(err);
        });
    }
}

export default new ClientDao();