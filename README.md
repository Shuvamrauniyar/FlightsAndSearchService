/
   -src/
   index.js //this is our main server file
   models/
   controllers/
   middlewares/
   services/
   utils/ like helper functions or extra utilities files are kept in utils

   config/ (inside it we can store databases configuration and other configurations)

   -tests/[later we will focus]


 # Welcome to Flights Service
 ## Project Setup
 - Clone the project on your local
 -Execute `npm install` on the same path as of your root directory  of the downloaded project.
 - Create a `.env` file int he root directory and add the following environment variable 
     - `PORT=3000`
 - Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

 ```
{
   
  "development": {
    "username": "YOUR_DB_LOGIN_NAME",
    "password": "YOUR_DB_PASSWORD",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
 ```

-once you have added your DB config as listed above ,go to src folder from your terminal and execute `npx sequelize db:create`

