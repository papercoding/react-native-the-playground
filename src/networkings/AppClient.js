import AxiosClient from './AxiosClient';
import {Platform} from 'react-native';
import {appConfigs} from '../configs/Configs';
import {OPEN_WEATHER_API} from './api';

const axiosClient = AxiosClient.shared();

class AppClient {
  static userID = '';
  static userAccessToken = '';
  static defaultParams = {};

  static setup(userID, userAccessToken) {
    AppClient.userID = userID;
    AppClient.userAccessToken = userAccessToken;
    AppClient.defaultParams = {
      accessToken: AppClient.userAccessToken,
      os: Platform.OS,
    };
  }

  static sendAxiosRequest(axiosData, startRequest = () => {}, endRequest = () => {}) {
    return new Promise((resolve, reject) => {
      startRequest();
      axiosClient(axiosData)
        .then(response => {
          console.tron.log('sendAxiosRequest -> Response: ', response);
          resolve(response);
        })
        .catch(error => {
          console.tron.log('sendAxiosRequest -> Error: ', error, error.message);
          reject(Error(error.message));
        })
        .finally(endRequest());
    });
  }

  static sendFetchRequest(url, options = {}, startRequest = () => {}, endRequest = () => {}) {
    return new Promise((resolve, reject) => {
      startRequest();
      fetch(url, {...options})
        .then(response => {
          console.tron.log('sendFetchRequest -> Response: ', response, response.status);
          return response.json();
        })
        .then(json => {
          resolve(json);
        })
        .catch(error => {
          console.tron.log('sendFetchRequest -> Error: ', error, error.message);
          reject(error);
        })
        .finally(endRequest());
    });
  }

  static getCurrentWeatherByCityName(cityName, startRequest, endRequest) {
    const url = `${appConfigs.openWeatherURL}${OPEN_WEATHER_API.CURRENT_WEATHER}?q=${cityName}&appid=${appConfigs.openWeatherApiKey}`;
    const successCallback = data => {
      return data;
    };
    return this.sendFetchRequest(url, {}, startRequest, endRequest).then(successCallback);
  }
}

export default AppClient;
