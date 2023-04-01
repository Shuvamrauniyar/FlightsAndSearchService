const {AirportService} =  require('../services/index');

const airportService = new AirportService();

const create = async (req,res) => {
    try {
        const response = await airportService.create(req.body);
        return res.status(201).json({
            message: ' Sucessfully created the airport ',
            err: {},
            data: response,
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: ' cannot create the airport ',
            err: error,
            data: {},
            success: false
        })
    }
}
module.exports= {
    create
}