import axios from 'axios';

const GOOGLE_API_KEY = 'AIzaSyCYvweZhF_EsjwDB9UVv6arZj-IoHfJW-s';
const GOOGLE_ROOT_URL = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
const WWO_API_KEY = 'd593dd7bba4d4bb8bcf154640163006';
const WWO_ROOT_URL = 'http://api.worldweatheronline.com/premium/v1/marine.ashx?key=';

// http://api.worldweatheronline.com/premium/v1/marine.ashx?key=d593dd7bba4d4bb8bcf154640163006&format=json&q=45,-2

export const FETCH_LOCATION = 'FETCH_LOCATION';
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchDiveLocation(city) {
  const url = `${GOOGLE_ROOT_URL}${city}&key=${GOOGLE_API_KEY}`;
  const request = axios.get(url);
  console.log('ACTION CALLED', city);
  return {
    type: FETCH_LOCATION,
    payload: request
  }
}

export function fetchDiveLocationWeather(lat, long) {
  const url = `${WWO_ROOT_URL}${WWO_API_KEY}&format=json&q=${lat},${long}`;
  const request = axios.get(url);
  console.log('ACTION CALLED', lat, long);
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
