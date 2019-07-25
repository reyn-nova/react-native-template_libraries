import React from 'react';
import {
    View,
} from 'react-native'

import Toggle from '../helpers/Toggle';

const toggleOnImage = require("../icons/toggleon.png")
const toggleOffImage = require("../icons/toggleoff.png")

export default class ToggleModule extends React.Component {
    static navigationOptions = {
        title: "Toggle",
    }

    render() {
        return (
            <View
                style = {{
                    backgroundColor: "white",
                    flex: 1,
                    padding: 20,
                }}
            >
                <Toggle
                    height = {50}
                    toggleOnImage = {toggleOnImage}
                    toggleOffImage = {toggleOffImage}
                    width = {50}
                />

                <View
                    style = {{
                        marginTop: 20,
                    }}
                >
                    <Toggle
                        height = {50}
                        toggleOnImage = {toggleOnImage}
                        toggleOffImage = {toggleOffImage}
                        width = {50}
                    />
                </View>

                <View
                    style = {{
                        marginTop: 20,
                    }}
                >
                    <Toggle
                        height = {50}
                        toggleOnImage = {toggleOnImage}
                        toggleOffImage = {toggleOffImage}
                        width = {50}
                    />
                </View>

                <View
                    style = {{
                        marginTop: 20,
                    }}
                >
                    <Toggle
                        height = {50}
                        toggleOnImage = {toggleOnImage}
                        toggleOffImage = {toggleOffImage}
                        width = {50}
                    />
                </View>

                <View
                    style = {{
                        marginTop: 20,
                    }}
                >
                    <Toggle
                        height = {50}
                        toggleOnImage = {toggleOnImage}
                        toggleOffImage = {toggleOffImage}
                        width = {50}
                    />
                </View>
            </View>
        )
    }
}