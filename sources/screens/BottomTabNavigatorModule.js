import React from 'react';
import {
    Image,
} from 'react-native';

import {
    createAppContainer,
    createMaterialTopTabNavigator,
} from 'react-navigation'

import BottomTab_Home from './tabScreens/Home';
import BottomTab_Profile from './tabScreens/Profile';

const BottomTab = createAppContainer(createMaterialTopTabNavigator(
    {
        BottomTab_Home: {
            screen: BottomTab_Home,
            navigationOptions: {
                tabBarIcon: <Image
                                resizeMode = "contain"
                                source = {require("../icons/home.png")}
                                style = {{
                                    height: 30,
                                    width: 30,
                                }}
                            />,
            },
        },
        BottomTab_Profile: {
            screen: BottomTab_Profile,
            navigationOptions: {
                tabBarIcon: <Image
                                resizeMode = "contain"
                                source = {require("../icons/profile.png")}
                                style = {{
                                    height: 30,
                                    width: 30,
                                }}
                            />,
            },
        },
    },
    {
        tabBarOptions: {
            indicatorStyle: {
                backgroundColor: "dimgray",
                height: 4,
            },
            showIcon: true,
            showLabel: false,
            style: {
                backgroundColor: "lightgray",
            },
            tabStyle: {
                height: 50,
            },
        },
        tabBarPosition: "bottom",
    },
))

export default class BottomTabNavigatorModule extends React.Component {
    static router = BottomTab.router

    static navigationOptions = {
        title: "Bottom Tab Navigator",
    }

    render() {
        return (
            <BottomTab />
        )
    }
}