const request = require("../handlers/requestHandler");

function test(){
	return "This is a test"
}


// Calls the cars.json endpoint and returns the first array containing
// the actual json object.
function call_endpoint(){
        return request.makeRequest()
}


function list_cars(){
        const cars_array = [];
        call_endpoint().then((resp =>{
                for (const vendor in resp["VehAvailRSCore"]["VehVendorAvails"]){
                        const vendor_cars = [];
                        let index = 0;
			console.log(vendor[index]["vendor"]["@name"])
                        for (const car in vendor[index]["VehAvails"]){
                                index++; 
                                console.log(car)
                        }
                }
        }))
}


function remove_duplicates(){
	const cars_array = [];
	call_endpoint().then((resp =>{
		for (const vendor in resp["VehAvailRSCore"]["VehVendorAvails"]){
			const vendor_cars = [];
			let index = 0;
			console.log(vendor[index]["VehAvails"])
			for (const car in vendor[index]["VehAvails"]){
				index++; 
				console.log(car)
				//if(car["Vehicle"]["VehMakeModel"]["@name"] in vendor_cars){
				//	continue;
				//}
				//else{
					// Add the car to the check list
				//	vendor_cars.push(car['Vehicle']['VehMakeModel']['@name'])
					// Add car to the cars list
				//	cars_array.push(car)
				//}
			}
		}
	}))

}


function get_cheapest_of_each_car(){

}


function filter_cdar_cars(){

}


function get_corporate_cars(){

}

function sort_low_to_high_for_agents(){

}


exports.test = test;
exports.remove_duplicates = remove_duplicates;
exports.list_cars = list_cars;
