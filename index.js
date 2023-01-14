/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import { Main } from './src/shared/main';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Main);
