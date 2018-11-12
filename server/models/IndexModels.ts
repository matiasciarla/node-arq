let Sequelize = require('sequelize');

import Client from '../models/Client';

class IndexModels {

    private client:any;

    constructor(){
        this.client = new Client();

        this.associate();
    }

    public getClient:Function = () => {
        return this.client;
    }

    // Declare the associations here
    private associate:Function = () => {

    }

}

export default IndexModels;