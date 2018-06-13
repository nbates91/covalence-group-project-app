import { AppRegistry } from 'react-native';
import App from './App';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader', 'Class RCTCxxModule', 'Module RNFetchBlob requires main queue setup',]);

AppRegistry.registerComponent('BhamBarhopFrontEnd', () => App);
