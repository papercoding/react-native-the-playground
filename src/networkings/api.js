import Config from 'react-native-config';

// Config API
const API_BASE_URL = Config.API_URL;
const OPEN_WEATHER_API_URL = Config.OPEN_WEATHER_API_URL;
const OPEN_WEATHER_API_KEY = Config.OPEN_WEATHER_API_KEY;

const OPEN_WEATHER_API = {
  CURRENT_WEATHER: '/weather',
};

export {
  API_BASE_URL,
  OPEN_WEATHER_API,
  OPEN_WEATHER_API_URL,
  OPEN_WEATHER_API_KEY,
};
