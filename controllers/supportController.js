import SupportService from '../services/supportService.js';

class SupportController {

  constructor(){
    this.supportService = new SupportService();
  }

  async getSupport(req, res){
    let value = await this.supportService.getSupport(req.params.id);
    res.send(JSON.stringify(value));
  }

  async postSupport(req, res){
    let support = {
      name: req.body.name,
      level: req.body.level
    };
    let value = await this.supportService.postSupport(support);
    if (value){
      res.send(JSON.stringify(value));
    }else{
      res.status(400).send("Bad request");
    }
  }

}

export default SupportController;