const {City} = require('../models/index');

//these are done by reading sequelize docs,these are object oriented code with the help of ORM
class CityRepository{
    async createCity({ name }){
        try {
            const city = await City.create({name});
            return city;
        } catch (error) {
            throw {error};
        }
    }
//why try catch ,to handle the situation like if a user wants
//to delete the data which doesnot exit in databases
    async deleteCity({ cityId })
    {
        try {
           await City.destroy({
            where: {
                id: cityId
            }
           });
        } catch (error) {
            throw {error};
        }
    }
}

module.exports = CityRepository;