let appDB = require("../model/knex")
const knex = require("../connection")

const faker = require('faker');
a=faker.name
b=a.firstName()
// console.log(b,b.length)


module.exports = (app) => {
    
    app.post("/postapi", (req, res) => {
        for(i=0;i<200;i++){
            let firstName = faker.name.firstName();
            let lastName = faker.name.lastName();
            let jobTitle = faker.name.jobTitle();
            let prefix = faker.name.prefix(); 
            let suffix = faker.name.suffix();
            let jobArea = faker.name.jobArea();
            data={firstName,lastName,jobTitle,prefix,suffix,jobArea}
            appDB.insert_data(data) 
            .then(() => { 
                res.send("update") 
            })
            .catch((err) => {
                res.send(err)
            })
        } 
    })
}

