const {FlightRepository , AirplaneRepository} = require('../repository/index');

const {compareTime} = require('../utils/helper');
class FlightService {

    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }
    async createFlight(data){
        try {
            //example  of a business logic
          if(!compareTime(data.arrivalTime, data.departureTime)) { //here we only checking for time,we can also check for date and time too 
            throw {error: 'Arrival time cannot be less than departure time'};
          }
          const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
          const flight = await this.flightRepository.createFlight({
            ...data, totalSeats:airplane.capacity
        });
        return flight;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw(error);
        }
    }
    
   async getFlight(flightId)
   {
    try {
        const flight = this.flightRepository.getFlight(flightId);
        return flight;
    } catch (error) {
        console.log("Something went wrong in service layer");
        return (error);
    }
   }
    async getAllFlightData(data) {
        try{
            const flights = await this.flightRepository.getAllFlights(data);
            return flights;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw(error);
        }
    }
    async update(id,data) {
        try{
            const flights = await this.flightRepository.update(id,data);
            return flights;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw(error);
        }
    }
}
module.exports = FlightService;

/*
   flightNumber,
   airplaneId,
   departureAirportId,
   arrivalAirportId,
   arrivalTime,
   departureTime,
   price,
   totalSeats -> airplane
*/