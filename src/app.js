const axios = require('axios');
const parsers = require('./parsers');
     
async function sendRequest(action, settings) {
	let axiosConfig = {
		method: parsers.string(action.params.method),
		url: parsers.string(action.params.url),
		baseURL: parsers.string(settings.baseUrl),
		headers: parsers.object(action.params.headers),
		params: parsers.string(action.params.params),
		data: parsers.object(action.params.data),
		timeout: parsers.number(action.params.timeout),
		auth: parsers.object(action.params.auth),
	}
	
	let response = await axios(axiosConfig)
	return response.data
}

module.exports = {
	sendRequest
}
