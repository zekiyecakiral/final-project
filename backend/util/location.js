const axios = require('axios');

const HttpError = require('../models/http-error');

const API_KEY =
  'pk.eyJ1IjoiemVraXllIiwiYSI6ImNrZXNlNTQ2ZTNhdTIyeW5wYjhpcWR5OHAifQ.xvDhG3GwcfC6QL_yWjKr5Q';

async function getCoordsForAddress(address) {

  
  // return {
  //   lat: 40.7484474,
  //   lng: -73.9871516
  // };
  const response = await axios.get(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        address
      )}.json?access_token=${API_KEY}`
  );
console.log(response.data);
  const data = response.data;

  if (!data || data.status === 'ZERO_RESULTS') {
    const error = new HttpError(
      'Could not find location for the specified address.',
      422
    );
    throw error;
  }

  console.log('********');
  console.log(data.features);

  const coordinates = data.features[0].geometry.coordinates;

  return coordinates;
}

module.exports = getCoordsForAddress;
