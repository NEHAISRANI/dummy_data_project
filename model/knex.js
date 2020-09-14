var knex = require('../connection')

let insert_data = (data1)=>{
    console.log(data1)
    return knex('dummytable').insert(data1)
}         

module.exports={insert_data}

