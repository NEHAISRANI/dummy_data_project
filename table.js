var knex=require("./connection") 
knex.schema.hasTable('dummytable').then((exists)=>{
    if (!exists){
    return knex.schema.createTable('dummytable',(table)=> {
        table.increments('id');
        table.string('firstName');
        table.string('lastName');
        table.string('jobTitle');
        table.string('prefix'); 
        table.string('suffix');
        table.string('jobArea');
        })
    .catch((err)=>{
        console.log(err,"There is some err while writing the quety")
    })
    }
    
    return console.log('already created events table');
});
