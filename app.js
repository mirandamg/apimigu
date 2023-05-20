/* const sql = require('mssql');

const config = {
    user: 'promiguad', // better stored in an app setting such as process.env.DB_USER
    password: 'Projectmigu5.', // better stored in an app setting such as process.env.DB_PASSWORD
    server: 'projectmigu.database.windows.net', // better stored in an app setting such as process.env.DB_SERVER
    port: 1433, // optional, defaults to 1433, better stored in an app setting such as process.env.DB_PORT
    database: 'projectmigu', // better stored in an app setting such as process.env.DB_NAME
    authentication: {
        type: 'default'
    },
    options: {
        encrypt: true
    }
}

console.log("Starting...");

let fetchedProducts;
//const map1 = new Map();

const setFetched = (rows) =>{
 fetchedProducts = rows;
 //for (let i=0; i<rows.length; i++){
   //console.log(rows[0][i]);
  //}
  //console.log("PRODUCTOS");
  //console.log(fetchedProducts);
}

function connectAndQuery() {
    const conn= new sql.ConnectionPool(config);

    conn.connect(function(err){
      if(err){
        console.log(err);
      }
      var req = new sql.Request(conn);
      let query ="SELECT TOP 10 * FROM productos";
      
      conn.query(query, (err, recordset)=>{
        if(err){
          console.log(err);
          return;
        }
        else{
         // console.log(recordset);
          for (var i=0; i<10;i++){
            console.log(recordset[i].idProducto)
          }
            //map1=(recordset);
            //setFetched(recordset);
            /* res.send(recordset);
            console.log(recordset.recordsets[0].length);
            result=recordset.recordsets[0][0].idProducto;
            console.log(result); 
        }
        conn.close();
      });
    });
}
connectAndQuery();
//console.log(map1.size);

function queryDatabase() {
  conn.query('SELECT * FROM productos', 
        function (err, results, fields) {
            if (err) throw err;
            else console.log('Selected ' + results.length + ' row(s).');
            for (i = 0; i < results.length; i++) {
                console.log('Row: ' + JSON.stringify(results[i]));
            }
            console.log('Done.');
        })
    conn.end(
        function (err) { 
            if (err) throw err;
            else  console.log('Closing connection.') 
    });
};
 */ 