import {
    AppRegistry,
} from 'react-native'

import {
    name as appName,
} from './app.json'

import App from './sources/screens/App'

AppRegistry.registerComponent(appName, () => App)