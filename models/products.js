const config = require('../config/configs');
const  { Pool, Client } = require('pg');
const pool = new Pool({
  connectionString:config.database.host,
})

module.exports.getProductsByCat=(codeCat,callback)=>{

   pool.query("SELECT product._id, product.productname, product.price FROM public.product inner join (select item_category._id from public.item_category where item_category.categorycode='"+codeCat+"'") as cat  on category_id = cat._id" , function(err, result) {
      //done();
      if(err) return console.error(err);
      return callback(result.rows);
   });

};

module.exports.getProductsByCatAndGroup=(codeCat,groupCode,callback)=>{

   pool.query("SELECT * FROM public.products inner join public.item_category where item_category.categorycode='"+codeCat+"'" , function(err, result) {
      //done();
      if(err) return console.error(err);
      return callback(result.rows);
   });

};
