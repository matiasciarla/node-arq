import UserDAO from '../dao/UserDAO';

class UserService {

    public createUser:Function = (user:any, callback:Function, callbackError:Function) => {
        UserDAO.createUsers(user, () => {
            callback();
        }, (err:any) => {
            callbackError(err);
        });
    }

    public findAll:Function = (callback:Function) => {
        UserDAO.find((users:any) => {
            callback(users);
        });
    }
}

export default new UserService();
