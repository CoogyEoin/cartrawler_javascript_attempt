const express = require('express');
const config = require('config');
const apiHandler = require("./apiHandler");

// Defining the Port from the default config file
const port = config.get('server.port');
const app = express()

// Middleware for parsing json
app.use(express.json())


app.get('/cars', (req, res) => {
  /*
   * The /Cars endpoint takes a method parameter from the requests body.
   *
   * methods:
   * test - Returns "this is a test".
   * remove_duplicates - Returns a list of cars that are all unique per vendor.
  */
  try {
	const method = req.body.method
	if (method in apiHandler.apiObject[req.method]){
		res.send(apiHandler.apiObject[req.method][method]())
  	}
  	else if (method){
    		res.send('Method specified in request body not recognised')
  	}
  	res.send('No Method specified in request body')
  }
  catch (e) {
  	console.log("Request failed with error: " + e);
  	res.send("Request failed with error: " + e)
  }
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
