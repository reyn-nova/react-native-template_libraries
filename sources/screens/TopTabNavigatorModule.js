import React from 'react';

import {
    createAppContainer,
    createMaterialTopTabNavigator,
} from 'react-navigation'

import TopTab_Home from './tabScreens/Home';
import TopTab_Profile from './tabScreens/Profile';

const TopTab = createAppContainer(createMaterialTopTabNavigator(
    {
        TopTab_Home: {
            screen: TopTab_Home,
            navigationOptions: {
                title: "Home",
            },
        },
        TopTab_Profile: {
            screen: TopTab_Profile,
            navigationOptions: {
                title: "Profile",
            },
        },
    },
    {
        tabBarOptions: {
            indicatorStyle: {
                backgroundColor: "dimgray",
                height: 4,
            },
            style: {
                backgroundColor: "darkgray",
            },
            tabStyle: {
                height: 50,
            },
        }
    },
))

export default class TopTabNavigatorModule extends React.Component {
    static router = TopTab.router

    static navigationOptions = {
        title: "Top Tab Navigator",
    }

    render() {
        return (
            <TopTab />
        )
    }
}