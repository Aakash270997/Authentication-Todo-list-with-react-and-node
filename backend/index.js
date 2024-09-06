require("dotenv").config({})
const { PUBLIC_Data } = require("./constant");
const app = require('./src/app');
const { ConnectDB } = require("./src/config/db.config");

ConnectDB()


app.listen(PUBLIC_Data.port, ()=>{
    console.log(`the app is listen to port ${PUBLIC_Data.port}`);
})