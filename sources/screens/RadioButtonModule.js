import React from 'react'
import {
    View,
} from 'react-native'

import RadioButtons from '../helpers/RadioButtons'

const toggleOnImage = require("../icons/radiobuttonon.png")
const toggleOffImage = require("../icons/radiobuttonoff.png")

export default class RadioButtonModule extends React.Component {
    static navigationOptions = {
        title: "Radio Button",
    }

    render() {
        let options = [
            "Canada",
            "Greenland",
            "Iceland",
            "Norway",
            "Russia",
        ]

        return (
            <View
                style = {{
                    backgroundColor: "white",
                    flex: 1,
                    padding: 20,
                }}
            >
                <RadioButtons
                    options = {options}
                    toggleOnImage = {toggleOnImage}
                    toggleOffImage = {toggleOffImage}
                />
            </View>
        )
    }
}