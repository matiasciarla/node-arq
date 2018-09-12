let Sequelize = require('sequelize');

import Client from '../models/Client';

class IndexModels {

    public client:any;


    constructor(){
        this.client = new Client().client;
    }

}

export default IndexModels;