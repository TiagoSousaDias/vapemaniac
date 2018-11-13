const  { Pool, Client } = require('pg');
const pool = new Pool({
  connectionString:config.database.host,
})
const config = require('../config/configs');
module.exports.getProducts=(callback)=>{

   pool.query("SELECT table_name  FROM information_schema.tables  WHERE table_schema='public' AND table_type='BASE TABLE;" , function(err, result) {
      done();
      if(err) return console.error(err);
      return callback(result.rows);
   });

};
