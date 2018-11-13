let mongoose = require('mongoose');

class MongoManager {
    
    private static instance: MongoManager;
    private connection:any = mongoose;

    constructor(){

        this.connection.connect('mongodb://' + process.env.HOST_MONGO +'/' + process.env.NAME_MONGO, function (err:any) {
 
            if (err) throw err;
            
            console.log('Successfully connected mongodb');
        
        });
    }

    public getConnection:Function = () => {
        return this.connection;
    }

    public static getInstance:Function = ():MongoManager => {
        if (!MongoManager.instance) {
            MongoManager.instance = new MongoManager();
        }
        return MongoManager.instance;
    }
    
}

export default MongoManager;