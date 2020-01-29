"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const mysql = require("mysql");
exports.setup = () => {
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
        }
        else {
            console.log(results);
        }
    });
    db.end();
};
/*
db.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMDAxX2NyZWF0ZV9ub2RlX3RyZWVfdGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIwMDFfY3JlYXRlX25vZGVfdHJlZV90YWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUMzQiwrQkFBK0I7QUFFbEIsUUFBQSxLQUFLLEdBQUcsR0FBRyxFQUFFO0lBQ3hCLE1BQU0sSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLDhCQUE4QjtJQUN4RSxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztJQUNwQyxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztJQUN4QyxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUc1QyxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7UUFDaEMsSUFBSTtRQUNKLElBQUk7UUFDSixRQUFRO1FBQ1IsUUFBUTtLQUNULENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUMvQixFQUFFLENBQUMsS0FBSyxDQUFDLG9CQUFvQixFQUFFLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUNyRCxJQUFJLEdBQUcsRUFBRTtZQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbEI7YUFBTTtZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDdEI7SUFFSCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNYLENBQUMsQ0FBQTtBQUNEOzs7OztFQUtFIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnZG90ZW52JykuY29uZmlnKCk7XG5pbXBvcnQgKiBhcyBteXNxbCBmcm9tICdteXNxbCc7XG5cbmV4cG9ydCBjb25zdCBzZXR1cCA9ICgpID0+IHtcbiAgY29uc3QgaG9zdCA9IGAke3Byb2Nlc3MuZW52Lk1ZU1FMX0hPU1R9YDsgLy86JHtwcm9jZXNzLmVudi5NWVNRTF9QT1JUfWA7XG4gIGNvbnN0IHVzZXIgPSBwcm9jZXNzLmVudi5NWVNRTF9VU0VSO1xuICBjb25zdCBwYXNzd29yZCA9IHByb2Nlc3MuZW52Lk1ZU1FMX1BBU1M7XG4gIGNvbnN0IGRhdGFiYXNlID0gcHJvY2Vzcy5lbnYuTVlTUUxfREFUQUJBU0U7XG5cblxuICBjb25zdCBkYiA9IG15c3FsLmNyZWF0ZUNvbm5lY3Rpb24oe1xuICAgIGhvc3QsXG4gICAgdXNlcixcbiAgICBwYXNzd29yZCxcbiAgICBkYXRhYmFzZVxuICB9KTtcbiAgIFxuICBkYi5jb25uZWN0KCk7XG4gIGNvbnNvbGUubG9nKCdjb25uZWN0ZWQgdG8gZGInKTtcbiAgZGIucXVlcnkoXCJzZWxlY3QgZGF0YWJhc2UoKTtcIiwgKGVyciwgcmVzdWx0cywgZmllbGQpID0+IHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHRzKTtcbiAgICB9XG4gICAgXG4gIH0pO1xuXG4gIGRiLmVuZCgpO1xufVxuLyogXG5kYi5xdWVyeSgnU0VMRUNUIDEgKyAxIEFTIHNvbHV0aW9uJywgZnVuY3Rpb24gKGVycm9yLCByZXN1bHRzLCBmaWVsZHMpIHtcbiAgaWYgKGVycm9yKSB0aHJvdyBlcnJvcjtcbiAgY29uc29sZS5sb2coJ1RoZSBzb2x1dGlvbiBpczogJywgcmVzdWx0c1swXS5zb2x1dGlvbik7XG59KTtcbiovIFxuIl19