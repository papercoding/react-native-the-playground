import {appConfigs} from '../configs/Configs';

const axios = require('axios');

function axiosClient() {
  let instance;
  return {
    shared() {
      if (!instance) {
        instance = axios.create({
          baseURL: appConfigs.apiBaseURL,
          // auth: appConfigs.apiBasicAuthorization,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'mobile-app': appConfigs.appName,
          },
        });
      }
      return instance;
    },
  };
}

const AxiosClient = axiosClient();
export default AxiosClient;
