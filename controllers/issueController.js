import db from "../db.js";
import IssueService from "../services/issueService.js";

class IssueController {

  constructor(){
    this.issueService = new IssueService();
  }

  async getIssue(req, res){
    let value = await this.issueService.getIssue(req.params.id);
    res.send(JSON.stringify(value));
  }

  async postIssue(req, res){
    let issue = {
      title: req.body.title,
      description: req.body.description,
      resolved: false,
      userId: req.body.userId
    };
    
    let value = await this.issueService.postIssue(issue);
    if (value){
      res.send(JSON.stringify(value));
    }else{
      res.status(400).send("Bad request");
    }
  }

  async putIssue(req, res){
    let data = {
      id: req.body.id,
      action: req.body.action
    }
    let ret;
    if (data.action === 'resolve'){
      ret = await this.issueService.resolveIssue(data);
    } 
    
    if (ret){
        res.status(200).send("OK");
    }else {
      res.status(400).send("Bad request");
    }
  }

}

export default IssueController;