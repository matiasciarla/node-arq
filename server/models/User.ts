let mongoose = require('mongoose');
import MongoManager from '../config/mongo';


class User {

    public model:any;
    private schema:any;

    constructor(){
        this.schema = MongoManager.Schema({
            firstName: String,
            lastName: String
        });

        this.model = MongoManager.model('User', this.schema);
    }


}

export default new User().model;

