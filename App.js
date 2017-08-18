export default (__DEV__
  ? require('./storybook').default
  : require('./src').defaut);
