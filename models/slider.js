const config = require('../config/configs');
const  { Pool, Client } = require('pg');
const pool = new Pool({
  connectionString:config.database.host,
})

module.exports.getSlider=(id,callback)=>{

   pool.query("SELECT * FROM public.sliderimages Where FKSlider = ?" , function(err, result) {
      //done();
      if(err) return console.error(err);
      return callback(result.rows);
   });

};
