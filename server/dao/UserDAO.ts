import User from '../models/User';

class UserDAO {

    public createUsers:Function = (user:any, callback:Function, callbackError:Function) => {
        let param:any = new User(user);
        
        param.save((err:any) => {
            if (err) {
                callbackError(err);
            } else {
                callback();
            }
        });
    } 

    public find:Function = (callback:Function) => {
        User.find().exec((err:any, users:any) => {
            if (err) throw err;
             
            callback(users);
        });
    }
}

export default UserDAO;