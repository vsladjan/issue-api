import UserService from "../services/userService.js";

class UserController {

  constructor(){
    this.userService = new UserService();
  }

  async getUser(req, res){
    let value = await this.userService.getUser(req.params.id);
    res.send(JSON.stringify(value));
  }

  async postUser(req, res){
    let user = {
      name: req.body.name,
      mail: req.body.mail,
      age: req.body.age
    };
    let value = await this.userService.postUser(user);
    if (value){
      res.send(JSON.stringify(value));
    }else{
      res.status(400).send("Bad request");
    }
  }

}

export default UserController;