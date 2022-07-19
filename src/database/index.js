const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'root',
  password: 'root',
  database: 'mycontacts',
});

client.connect().then(()=>{
  console.log("\nConnect to database successfuly 🔥🚀")
}).catch(()=>{
  console.warn("\nError when connecting to the database")
})
;

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};
