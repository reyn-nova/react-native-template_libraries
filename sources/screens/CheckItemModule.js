import React from 'react';
import {
    ScrollView,
    View,
} from 'react-native'

import CheckItem from '../helpers/CheckItem';

const toggleOnImage = require("../icons/checkbox.png")
const toggleOffImage = require("../icons/uncheckbox.png")

export default class CheckItemModule extends React.Component {
    static navigationOptions = {
        title: "Check Item",
    }

    render() {
        return (
            <ScrollView
                contentContainerStyle = {{
                    alignItems: "flex-start",
                    padding: 20,
                }}
                style = {{
                    backgroundColor: "white",
                    flex: 1,
                }}
            >
                <CheckItem
                    label = "Take a bath"
                    toggleOnImage = {toggleOnImage}
                    toggleOffImage = {toggleOffImage}
                />

                <View
                    style = {{
                        marginTop: 20,
                    }}
                >
                    <CheckItem
                        label = "Eat"
                        toggleOnImage = {toggleOnImage}
                        toggleOffImage = {toggleOffImage}
                    />
                </View>

                <View
                    style = {{
                        marginTop: 20,
                    }}
                >
                    <CheckItem
                        label = "Go to work on time"
                        toggleOnImage = {toggleOnImage}
                        toggleOffImage = {toggleOffImage}
                    />
                </View>

                <View
                    style = {{
                        marginTop: 20,
                    }}
                >
                    <CheckItem
                        label = "Meeting with clients"
                        toggleOnImage = {toggleOnImage}
                        toggleOffImage = {toggleOffImage}
                    />
                </View>

                <View
                    style = {{
                        marginTop: 20,
                    }}
                >
                    <CheckItem
                        label = "Report to the secretary"
                        toggleOnImage = {toggleOnImage}
                        toggleOffImage = {toggleOffImage}
                    />
                </View>
            </ScrollView>
        )
    }
}