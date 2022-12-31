//this file is for setting the server

const express= require ("express");
const bodyParser = require("body-parser");

// const{ City } =require('./models/index')
const{ PORT } =require ('./config/serverConfig'); 
const CityRepository = require('./repository/city-repository');

const setupAndStartServer = async () => {

    //create the express object
    const app=express();
    
    //two middlewares
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
   
    //const PORT=3000;
    app.listen(PORT ,() => {
        console.log(`Server started at ${PORT}`);
        //console.log(process.env);
        const repo = new CityRepository();
        repo.createCity({ name: "New Delhi"});
    });

}

setupAndStartServer(); 