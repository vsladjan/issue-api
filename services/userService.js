import db from '../db.js';


class UserService {

    async getUser(id){
        let user;
        try {
          if (id){
            user = await db.models.user.findByPk(id);
          } else {
            user = await db.models.user.findAll();
          }
          return user ? user : {};
        } catch (e){
          console.log(e);
          return {};
        }
      }
    
      async postUser(user){
        let value;
        try{
          value = await db.models.user.create({
            name: user.name,
            mail: user.mail,
            age: user.age
          });
        }catch(e){
          console.log(e);
        }
        return value;
      }

}


export default UserService;