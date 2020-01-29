require('dotenv').config();
import * as mysql from 'mysql';

export const setup = () => {
  const host = `${process.env.MYSQL_HOST}`; //:${process.env.MYSQL_PORT}`;
  const user = process.env.MYSQL_USER;
  const password = process.env.MYSQL_PASS;
  const database = process.env.MYSQL_DATABASE;


  const db = mysql.createConnection({
    host,
    user,
    password,
    database
  });
   
  db.connect();
  console.log('connected to db');
  db.query("select database();", (err, results, field) => {
    if (err) {
      console.log(err);
    } else {
      console.log(results);
    }
    
  });

  db.end();
}
/* 
db.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
*/ 
