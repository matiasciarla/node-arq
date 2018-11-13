let Sequelize = require('sequelize');

import Client from '../models/Client';

class IndexModels {

    private client:Client;

    constructor(){
        this.client = new Client();

        this.associate();
    }

    public getClient:Function = () => {
        return this.client.getModel();
    }

    // Declare the associations here
    private associate:Function = () => {

    }

}

export default IndexModels;