let Sequelize = require('sequelize');

import Client from '../models/Client';

class IndexModels {

    public client = Client;


    constructor(){

    }

}

export default new IndexModels();