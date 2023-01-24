//this file is for setting the server

const express= require ("express");
const bodyParser = require("body-parser");

 //const{ City } =require('./models/index')
const{ PORT } =require ('./config/serverConfig'); 
//const CityRepository = require('./repository/city-repository');

const ApiRoutes = require('./routes/index');
//const { CityRepository } = require("./repository");
//const db = require("./models");

//const db= require('./models/index');

const db = require('./models/index');
//const airport = require("./models/airport");
//const city = require('./models/city');

const {City,Airport} = require('./models/index');
const setupAndStartServer = async () => {

    //create the express object
    const app=express();
    
    //two middlewares
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
   
    app.use('/api',ApiRoutes);
    //const PORT=3000;
    app.listen(PORT , async () => {
        console.log(`Server started at ${PORT}`);
        //console.log(process.env);
      //  const repo = new CityRepository();
       // repo.createCity({ name: "New Delhi"});



       if(process.env.SYNC_DB){
        db.sequelize.sync({alter: true});

       }
       const city = await City.findOne({
        where: {
            id: 577
        }
       });
       const airports = await city.getAirports();

    //    const newAirport = await Airport.create({
    //     name: 'Jindal Vijaynagar Airport',
    //     cityId:576
    //    });

    const newAirport = await Airport.findOne({
        where: {
            id: 5
        }
    });
    await city.addAirport(newAirport);


    });

}

setupAndStartServer(); 