const {City} = require('../models/index');

//these are done by reading sequelize docs,these are object oriented code with the help of ORM
class CityRepository{
    async createCity({ name }){
        try {
            const city = await City.create({name});
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
//why try catch ,to handle the situation like if a user wants
//to delete the data which doesnot exit in databases
    async deleteCity(cityId)
    {
        try {
           await City.destroy({
            where: {
                id: cityId
            }
           });
           return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
   
    async updateCity(cityId, data) { //data( is anv   object) = {name : "Pragyaraj"}
          try {

            //The below approach also works but will not return updated object 
            //if we are using Pg then returning: true can be used ,else not
            // const city= await City.update(data ,{
            //     where :{
            //         id: cityId
            //     }
            // });
            //for getting updated data in ,mysql we use the below approach
            const city = await City.findByPk(cityId);
            city.name=data.name;
            await city.save();
            return city;
          } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
          }
    }
    async getCity(cityId)
    {
        try{
            //const city = await City.findOne();
            const city = await City.findByPk(cityId);
            return city;
        } catch(error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}

module.exports = CityRepository;