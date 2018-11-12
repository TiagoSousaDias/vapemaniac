const pg = require('pg');
const config = require('../config/configs');
module.exports.getProducts=(callback)=>{
pg.connect(connectionString, function(err, client, done) {
   client.query("SELECT table_name  FROM information_schema.tables  WHERE table_schema='public' AND table_type='BASE TABLE;" , function(err, result) {
      done();
      if(err) return console.error(err);
      return callback(result.rows);
   });
});
};
