const { CityService } = require('../services/index');
 

const cityService = new CityService(); //inorder to use above required cityservice ,we need to create an object of it

//below are the api we will be creating for the purpose of creating
//,deleting ,updating and getting the cities in the city database

const create = async(req,res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
        data:city,
        success: true,
        message: 'Successfully created a city',
        err: {}
    });
  } catch (error) {
    console.log(error); //we will not throw error from here otherwise we will never be able to stop the error mapping
    return res.status(500).json({//for now only the status code is hardcoded
        data:{},
        success: false,
        message: 'Not able to create a city' ,
        err: error
    });
 }
}  
//DELETE ->request url = /city/:id
const destroy = async(req,res) => {
    try {
      const response = await cityService.deleteCity(req.params.id);
    return res.status(200).json({
        data:response,
        success: true,
        message: 'Successfully deleted a city',
        err: {}
    });
    } catch (error) {
      console.log(error); 
      return res.status(500).json({
          data:{},
          success: false,
          message: 'Not able to delete a city' ,
          err: error
      });
    }

}
//GET -> /city/:id
const get = async (req,res) => {
    try {
      const response = await cityService.getCity(req.params.id);
      return res.status(200).json({
          data:response,
          success: true,
          message: 'Successfully fetched a city',
          err: {}
      });
    } catch (error) {
      console.log(error); 
      return res.status(500).json({
        data:{},
        success: false,
        message: 'Not able to get a city' ,
        err: error
    });
    }
}
//PATCH -> /city/:id ->req.body (req body contains the value with which u want to update)
const update = async(req,res) => {
    try {
      const response = await cityService.updateCity(req.params.id,req.body);
      return res.status(200).json({
          data:response,
          success: true,
          message: 'Successfully  updated a city',
          err: {}
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        data:{},
        success: false,
        message: 'Not able to update a city' ,
        err: error
    });
    }
}

const getAll = async ( req,res) => {
  try{
     const cities = await cityService.getAllCities(req.query);
     return res.status(200).json({
      data:cities, //in data  we returned all the cities details
      success: true,
      message: 'Successfully  fetched all cities',
      err: {}
  });
  }
  catch (error) {
    console.log(error);
    return res.status(500).json({
      data:{},
      success: false,
      message: 'Not able to fetch a cities' ,
      err: error
  });
  }
}
//here class is not defined so we need to export each functions specifically
//compare it with the city-repository.js file ,you will understand
module.exports = {
    create,
    destroy,
    get,
    update,
    getAll
}