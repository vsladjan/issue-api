import db from '../db.js';


class SupportService {
  
  async getSupport(id){
    let support;
    try {
      if (id){
        support = await db.models.support.findByPk(id);
      } else {
        support = await db.models.support.findAll();
      }
      return support ? support : {};
    } catch (e){
      console.log(e);
      return {};
    }
  }

  async postSupport(support){
    let value;
    try{
      value = await db.models.support.create({
        name: support.name,
        level: support.level
      });
    }catch(e){
      console.log(e);
    }
    return value;
  }
  
}
  
export default SupportService;