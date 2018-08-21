let Sequelize = require('sequelize');

import EntityManager from '../config/db.js';

class Client {

    public client:any;

    constructor(){
        this.client = EntityManager.define('clients', {
            id          : { type: Sequelize.INTEGER, primaryKey: true},
            first_name  : Sequelize.STRING,
            last_name   : Sequelize.STRING

        }, {
            underscored     : true,
            freezeTableName : true,
            tableName       : 'clients'
        });
    }
}

export default new Client().client;