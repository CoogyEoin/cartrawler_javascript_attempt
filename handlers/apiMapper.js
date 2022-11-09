const cars = require('../components/cars');


apiObject = {
	"GET":{
		"test": cars.test,
		"remove_duplicates": cars.remove_duplicates,
		"call_endpoint": cars.call_endpoint
	},
	"POST": {},
	"PUT": {},
	"DELETE": {}
}

exports.apiObject = apiObject;
