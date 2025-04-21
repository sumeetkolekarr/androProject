/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// For Redux
import store from './components/Redux/store/store';
import {Provider} from 'react-redux';

const AppRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => AppRedux);
