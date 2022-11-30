## Usage

Locate inside root folder of project and run **docker-compose build** and after that **docker-compose up -d** to run application. Database side is mysql container, api side of application is in nodejs.
After bringing up containers docker will run sequelize migrations to create needed tables in mysql database and after that app will start.

There are total of 3 tables: User, Support and Issue. User contains following fields: id, name, mail and age. Support contains id, name and level. Issue is connecting table between User and Support and contains: id, title, description, resolved and foreign keys userId, supportId.

By calling 
```json
{
    http://localhost:9000/user
    http://localhost:9000/support
    http://localhost:9000/issue
}
```
or
```json
{
    http://localhost:9000/user/{id}
    http://localhost:9000/support/{id}
    http://localhost:9000/issue/{id}
}
```
you can GET all results or one of user, supports, issues. Example of usage POST and PUT request is given in postman collection.

Postman collecions are located in postman folder, run first **createUserSupport** collection to create some users/supports first, after that you can run requests from **issueCollection** for creating or resolving issues. 

POST on **http://localhost:9000/issue** creates new issue and automaticly assigns free support

PUT on **http://localhost:9000/issue** resolves issue and assigns support on that issue to some other open issue

GET on **http://localhost:9000/issue/{id}** returns issues. 

Examples of these requests are given in mentioned collection.