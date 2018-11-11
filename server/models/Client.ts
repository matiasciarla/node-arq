let Sequelize = require('sequelize');

import EntityManager from '../config/db.js';

class Client {

    private model:any;
    private entityManager:EntityManager;

    constructor(){

        this.entityManager = EntityManager.getInstance();

        this.model = this.entityManager.getConnection().define('clients', {
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