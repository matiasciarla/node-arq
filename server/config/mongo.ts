let mongoose = require('mongoose');

class MongoManager {
    
    public user:any;
    public connection:any = mongoose;

    constructor(){

        this.connection.connect('mongodb://' + process.env.HOST_MONGO +'/' + process.env.BASE_MONGO, function (err:any) {
 
            if (err) throw err;
            
            console.log('Successfully connected mongodb');
        
        });

        

        
     }

    
}

export default new MongoManager().connection;