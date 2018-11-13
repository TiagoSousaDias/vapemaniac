const config = require('../config/configs');
const  { Pool, Client } = require('pg');
const pool = new Pool({
  connectionString:config.database.host,
})

module.exports.getProducts=(callback)=>{

   pool.query("SELECT * FROM public.item_category;" , function(err, result) {
      //done();
      if(err) return console.error(err);
      return callback(result.rows);
   });

};
