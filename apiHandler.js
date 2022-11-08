const cars = require('./models/cars');


apiObject = {
	"GET":{
		"test": cars.test,
		"remove_duplicates": cars.remove_duplicates
	},
	"POST": {},
	"PUT": {},
	"DELETE": {}
}

exports.apiObject = apiObject;
