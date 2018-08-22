let Sequelize = require('sequelize');

class EntityManager {

    
    
    public connection = new Sequelize('node-arq', process.env.user, process.env.password, {
        host    : process.env.host,
        port    : process.env.port,
        dialect : 'mysql',
        pool: {
            max: 24,
            min: 0
          },
        define: {
            timestamps: false
        }
    });   
    
    constructor(){

        this.connection.authenticate().then(() => {
          console.log('Connection has been established successfully.');
        })
        .catch((err:any) => {
          console.error('Unable to connect to the database:', err);
        });       
    }
}

export default new EntityManager().connection;