//previously dotenv was written in index.js but we separated it and lept in config file
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT
}
