const config = require('../config/configs');
const  { Pool, Client } = require('pg');
const pool = new Pool({
  connectionString:config.database.host
})

module.exports.getMenuCategories=(callback)=>{
   let cats;
   pool.query("SELECT * FROM public.item_category where ismenu = true" , function(err, result) {
      //done();
      if(err) return console.error(err);
    //  cats = result.rows;
    return callback(result.rows);
   });

};
