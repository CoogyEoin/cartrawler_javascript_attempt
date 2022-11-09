//const request = require("./handlers/apiMapper");
const axios = require("axios");
const func = require("./handlers/requestHandler");
const fs = require('fs');


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


//makeRequest().then(resp =>{
//	console.log(resp)
//})
//


async function axiosTest() {
      try {
        const response = await axios.get(url)
	// console.log(response)
        return response.data
      }
        
      catch (error) {
        console.log(error);
      }
}

var yurt;

async function caller(){
	var val = await axiosTest()
	val = yurt
	return yurt
}

caller()
console.log(yurt)
