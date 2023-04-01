
const validateCreateFlight = (req,res,next) => {
    //if any of the below data is missing then flight cannot be created in database
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price 
    ) {
        return res.status(400).json ({ //400 means bad request from client side
            data: {},
            success: false,
            message: 'Invalid request body to create flight',
            err: 'Missing mandatory properties to create a flight'
        });
    }
    next();
}

module.exports = {
    validateCreateFlight
}