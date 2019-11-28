import {
  API_BASE_URL,
  OPEN_WEATHER_API_URL,
  OPEN_WEATHER_API_KEY,
} from '../networkings/api';
import { APP_NAME } from '../constants';

const isDevelopmentMode = __DEV__;

// Log
const enableLog = isDevelopmentMode;
const reactotron = {
  enable: true,
};

export const appConfigs = {
  appName: APP_NAME,
  enableLog,
  reactotron,
  // API
  apiBaseURL: API_BASE_URL,
  // API - Open Weather
  openWeatherURL: OPEN_WEATHER_API_URL,
  openWeatherApiKey: OPEN_WEATHER_API_KEY,
};
