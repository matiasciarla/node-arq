let Sequelize = require('sequelize');

import SQLManager from '../config/db.js';

class Client {

    private model:any;
    private SQLManager:SQLManager;

    constructor(){

        this.SQLManager = SQLManager.getInstance();

        this.model = this.SQLManager.getConnection().define('clients', {
            id          : { type: Sequelize.INTEGER, primaryKey: true},
            first_name  : Sequelize.STRING,
            last_name   : Sequelize.STRING

        }, {
            underscored     : true,
            freezeTableName : true,
            tableName       : 'clients'
        });
    }

    public getModel:Function = () => {
        return this.model;
    }
}

export default Client;