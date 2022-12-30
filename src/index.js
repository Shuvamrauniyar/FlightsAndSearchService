//this file is for setting the server

const express= require ("express");
const bodyParser = require("body-parser");
const{ PORT } =require ('./config/serverConfig'); 
const setupAndStartServer =async () => {

    //create the express object
    const app=express();
    
    //two middlewares
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
   
    //const PORT=3000;
    app.listen(PORT ,() => {
        console.log(`Server started at ${PORT}`);
        console.log(process.env);
    });

}

setupAndStartServer(); 