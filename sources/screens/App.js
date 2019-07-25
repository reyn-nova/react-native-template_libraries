import React from 'react';
import {
    Platform,
    StatusBar,
} from 'react-native';

import {
    createAppContainer,
    createStackNavigator
} from 'react-navigation';

import {
    combineReducers,
    createStore,
} from 'redux';

import {
    Provider,
} from 'react-redux';

import StackViewStyleInterpolator from 'react-navigation-stack/src/views/StackView/StackViewStyleInterpolator';

import Menu from './Menu';
import MaterialInputFormModule from './MaterialInputFormModule';
import CurrencyInputFormAndFormatterModule from './CurrencyInputFormAndFormatterModule';
import MaterialDropdownFormModule from './MaterialDropdownFormModule';
import ModuleExportsModule from './ModuleExportsModule';
import CalendarModule from './CalendarModule';
import TopTabNavigatorModule from './TopTabNavigatorModule';
import BottomTabNavigatorModule from './BottomTabNavigatorModule';
import ImagePickerAndViewerModule from './ImagePickerAndViewerModule';
import QRCodeScannerModule from './QRCodeScannerModule';
import ReactNativeMapsModule from './ReactNativeMapsModule';
import RealmLocalStorageModule from './RealmLocalStorageModule';
import CheckItemModule from './CheckItemModule';
import ToggleModule from './ToggleModule';
import RadioButtonModule from './RadioButtonModule';
import ReduxModule from './ReduxModule';
import ChangeBackgroundColor from './ChangeBackgroundColor';

const AppContainer = createAppContainer(createStackNavigator(
    {
        Menu,
        MaterialInputFormModule,
        CurrencyInputFormAndFormatterModule,
        MaterialDropdownFormModule,
        CheckItemModule,
        RadioButtonModule,
        ToggleModule,
        ModuleExportsModule,
        CalendarModule,
        TopTabNavigatorModule,
        BottomTabNavigatorModule,
        ImagePickerAndViewerModule,
        QRCodeScannerModule,
        ReactNativeMapsModule,
        RealmLocalStorageModule,
        ReduxModule,
        ChangeBackgroundColor,
    },
    {
        initialRouteName: "Menu",
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "rgb(40, 40, 40)",
            },
            headerTintColor: "white",
        },
        transitionConfig: () => ({screenInterpolator: sceneProps => StackViewStyleInterpolator.forHorizontal(sceneProps)}),
    }
))

import ColorReducer from '../reducer/ColorReducer'

const combinedReducers = combineReducers({
    color: ColorReducer,
})

const store = createStore(combinedReducers)

export default class App extends React.Component {
    messageListener = null

    componentDidMount() {
        if(Platform.OS == "android") {
            StatusBar.setBackgroundColor("rgb(40,40,40)")
        }
        
        StatusBar.setBarStyle("light-content")
    }

    render() {
        return (
            <Provider
                store = {store}
            >
                <AppContainer />
            </Provider>
        )
    }
}