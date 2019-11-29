module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'react-native/no-inline-styles': 0,
    'prettier/prettier': 0,
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
  },
};
