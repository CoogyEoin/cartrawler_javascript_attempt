const request = require("../handlers/requestHandler");

function test(){
	return "This is a test"
}


function call_endpoint(){
        request.makeRequest().then(resp =>{
                return resp[0]
        })
}


function remove_duplicates(){
	return null
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
exports.call_endpoint = call_endpoint;
