const config = require('config');
const axios = require('axios');

const endpoint = config.get('endpoint');


async function makeRequest(url=endpoint) {
        try {
        const resp = await axios.get(url)
        let data = resp.data
        return data[0]
        } catch (error) {
                console.log(error);
                return null
        }
}



exports.makeRequest = makeRequest;
