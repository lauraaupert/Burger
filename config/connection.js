const mysql = require('mysql');

var connection;

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
  //   host: '	qz8si2yulh3i7gl3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  //   port: 3306,
  //   user: 'hm0a9cqfjkpro2ne',
  //   password: 'lxrvzjohyv8tz5s7',
  //   database: 'coa0v38yiwowob86',
  
  // })
} else {connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Ivegotmysql123',
  database: 'burgers_db',
});
}

connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;