let Sequelize = require('sequelize');

class EntityManager {
    
    public connection = new Sequelize('<%CONTAINER_NAME%>', process.env.USER_DB, process.env.PASSWORD_DB, {
        host    : process.env.HOST_DB,
        port    : process.env.PORT_DB,
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