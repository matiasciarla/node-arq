let Sequelize = require('sequelize');

class EntityManager {

    
    private static instance: EntityManager;
    
    private connection = new Sequelize('<%CONTAINER_NAME%>', process.env.USER_SQL, process.env.PASSWORD_SQL, {
        host    : process.env.HOST_SQL,
        port    : process.env.PORT_SQL,
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

    public static getInstance:Function = ():EntityManager => {
        if (!EntityManager.instance) {
            EntityManager.instance = new EntityManager();
        }
        return EntityManager.instance;
    }

    public getConnection:Function = () => {
        return this.connection;
    }
    
}

export default EntityManager;