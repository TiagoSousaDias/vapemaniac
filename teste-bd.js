var SequelizeAuto = require('sequelize-auto')
var auto = new SequelizeAuto('d2kg1fe21rjlb8', 'ltqhsuvlwfzylt', 'ebaeacba766bb3c1d243c2e85ef8854f074181c73b64c004e4b5a058b06c8004',{
  host: 'ec2-79-125-8-105.eu-west-1.compute.amazonaws.com',
  port:'5432',
  dialect:'postgres',
  protocol:'postgres',
  dialectOptions: {
    ssl: true
  }
});

auto.run(function (err) {
  if (err) throw err;

  console.log(auto.tables); // table list
  console.log(auto.foreignKeys); // foreign key list
});
