let mongoose = require('mongoose');
import MongoManager from '../database/MongoManager';


class User {

    public model:any;
    private schema:any;
    private mongoManager:MongoManager;

    constructor(){

        this.mongoManager = MongoManager.getInstance();

        this.schema = this.mongoManager.getConnection().Schema({
            firstName: String,
            lastName: String
        });

        this.model = this.mongoManager.getConnection().model('User', this.schema);
    }

}

export default new User().model;

