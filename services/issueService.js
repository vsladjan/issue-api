import db from '../db.js';

class IssueService {
  
  async getIssue(id){
    let issue;
    try {
      if (id){
        issue = await db.models.issue.findByPk(id, {
          include: [
            { model: db.models.user, as: 'user', required: true },
            { model: db.models.support, as: 'support', required: true }
          ],
          raw: true,
          nest: true
        });
      } else {
        issue = await db.models.issue.findAll();
      }
      return issue ? issue : {};
    } catch (e){
      console.log(e);
      return {};
    }
  }

  async postIssue(issue){
    let value;
    try{
      let sId;
      // get free supports
      let support = await db.models.support.findAll({
        attributes: [
          'id',
            [
              db.sequelize.literal(`(
                select count(*) from issue where issue.supportId = support.id) - 
                (select count(*) from issue where 
                  issue.supportId=support.id and issue.resolved = true)`),
                'taken_count'
            ]
        ],
        include: [
          {
            model: db.models.issue, as: 'issues',
            attributes: [],
            required: false
          },
        ],
        having: { 'taken_count' : 0}
      });

      //console.log(JSON.stringify(support));
      // pick random support from list of free supports
      if (support.length > 0){
        let randomSupport = Math.floor(Math.random() * support.length);
        sId = support[randomSupport].id;
      }
      //create new issue
      value = await db.models.issue.create({
        title: issue.title,
        description: issue.description,
        resolved: issue.resolved,
        userId: issue.userId,
        supportId: sId
      });
    }catch(e){
      console.log(e);
    }
    return value;
  }

  async resolveIssue(data){
    let changed;
    try{
      // get issue needed to resolve
      let issueToChange = await db.models.issue.findByPk(data.id);
      if (!issueToChange.resolved && issueToChange.supportId){
        // update issue
        changed = await db.models.issue.update({
          resolved: true
        }, { where: { id: data.id } });
        if (changed){
          // if changed, find next unresolved issue
          let nextIssue = await db.models.issue.findOne({
            where: {
              resolved: false,
              supportId: null
            }
          });
          if (nextIssue){
            // update supprot field of next issue
            await db.models.issue.update({
              supportId: issueToChange.supportId
            }, { where: { id: nextIssue.id } });
          }
        }
      }
    } catch(e){
      console.log(e);
    }
    if (changed){
      return true;
    } else {
      return false;
    }   
  }
}

export default IssueService;