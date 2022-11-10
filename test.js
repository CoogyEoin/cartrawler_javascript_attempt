//const request = require("./handlers/apiMapper");
const axios = require("axios");
const func = require("./handlers/requestHandler");
const cars = require("./components/cars");

const url = 'https://www.cartrawler.com/ctabe/cars.json'

async function makeRequest() {
	try {
	const resp = await axios.get('https://www.cartrawler.com/ctabe/cars.json')
        let data = resp.data
	return data[0]
	} catch (error) {
    		console.log(error);
		return null
  	}
}


cars.list_cars()

