const {Flights,sequelize} = require('../models/index');
const CrudRepository = require('./crud-repository');
const {Op,Sequelize} = require('sequelize');

class FlightRepository extends CrudRepository{
    //for update flight i am using the update api from crud-repo
    constructor()
    {
        super(Flights);
    }

    #createFilter(data){
        let filter = {};
        if(data.arrivalAirportId){
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId){
            filter.departureAirportId = data.departureAirportId;
        }
        let priceFilter = []
        if(data.minPrice) {
            // Object.assign(filter, {price : {[Op.gte]:data.minPrice}});
            priceFilter.push({price : {[Op.gte]:data.minPrice}});
        }
        if(data.maxPrice) {
            // Object.assign(filter, {price : {[Op.lte]:data.maxPrice}});
            priceFilter.push({price : {[Op.lte]:data.maxPrice}});
        }
        Object.assign(filter, {[Op.and]:priceFilter});
        return filter;
    }
    async createFlight(data) {
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw(error);
        }
    }

    async getFlight(flightId) {
        try{
            const flight = await Flights.findByPk(flightId)
            return flight;
        }catch (error) {
            console.log("Something went wrong in the repository layer");
            throw(error);
        }

    }

    async getAllFlights(filter) {
        try{
            // let d = 'New Delhi';
            // let b = 'butwal';
            let getQuery = `select f.flightNumber,f.arrivalTime,f.departureTime,f.price from flights f 
                        INNER JOIN airports a1 on a1.id = f.departureAirportId 
                        INNER JOIN cities c1 on c1.id = a1.cityId 
                        INNER JOIN airports a2 on a2.id = f.arrivalairportId 
                        INNER JOIN cities c2 on c2.id = a2.cityId where c1.name = '${filter.source}' AND c2.name = '${filter.destination}' 
                        AND Date_Format(f.departureTime,'%Y-%m-%d') = '${filter.date}'`;

            if(filter.minPrice){
                getQuery += ` AND f.price >= ${filter.minPrice}`
            }
            if(filter.maxPrice){
                getQuery += ` AND f.price <= ${filter.maxPrice}`
            }
            const flight = await sequelize.query(getQuery, { type: Sequelize.QueryTypes.SELECT });

            // const filterObject = this.#createFilter(filter);
            // const flight = await Flights.findAll({
            //     where: filterObject
            // });

            if(flight.length == 0)
            return 'No flights found';
            return flight;
        }catch (error) {
            console.log("Something went wrong in the repository layer");
            throw(error);
        }

    }
    
}
module.exports = FlightRepository;