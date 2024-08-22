const app = require("./src/server");
const dbConetion = require("./src/config/dbConection")
const {PORT} = process.env;


dbConetion() 

.then(()=>{
    app.listen(PORT, ()=>console.log(`Servidor escuchando en el puerto ${PORT}`))
})
.catch((err)=>console.log("Tenemos problemas con la conexión a la DB", err.message));

module.exports = app;