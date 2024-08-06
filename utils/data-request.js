// data-request.js

const axios = require('axios');

async function apiRequest() {
    try {
        const res = await axios.get('https://swapi.dev/api/people/');
        return res.data.results; 
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = apiRequest;
