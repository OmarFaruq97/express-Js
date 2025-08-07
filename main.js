const con = new client({
DB_USER:postgres,
DB_PASS:1234,
DB_HOST:localhost,
DB_NAME:DemoDB,
DB_PORT:5432,
PORT:3000
})

con.connect().then(()=> console.log("connected"))