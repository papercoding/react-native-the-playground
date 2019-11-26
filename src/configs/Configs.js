const isDevelopmentMode = __DEV__;
const isProductionMode = !isDevelopmentMode;

// Log
const enableLog = isDevelopmentMode;
const reactotron = {
  enable: true,
};

export const appConfigs = {
  enableLog,
  reactotron,
};
