import UserDAO from '../dao/UserDAO';

class UserService {

    private userDao:UserDAO;

    constructor(){
        this.userDao = new UserDAO();
    }

    public createUser:Function = (user:any, callback:Function, callbackError:Function) => {
        this.userDao.createUsers(user, () => {
            callback();
        }, (err:any) => {
            callbackError(err);
        });
    }

    public findAll:Function = (callback:Function) => {
        this.userDao.find((users:any) => {
            callback(users);
        });
    }
}

export default UserService;
