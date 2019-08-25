import React from 'react'
import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native'

import PropTypes from 'prop-types'

import Toggle from './Toggle'

export default class CheckItem extends React.Component {
    static propTypes = {
        checkAssigned: PropTypes.bool,
        label: PropTypes.string,
        onPress: PropTypes.func,
        toggleHeight: PropTypes.number,
        toggleOffImage: PropTypes.any.isRequired,
        toggleOnImage: PropTypes.any.isRequired,
        toggleWidth: PropTypes.number,
    }
    
    render() {
        return (
            <TouchableOpacity
                activeOpacity = {0.6}
                onPress = {() => {
                    this.toggle.setState({toggleOn: !this.toggle.state.toggleOn})

                    if(this.props.onPress != undefined) {
                        this.props.onPress()
                    }
                }}
                style = {{
                    alignItems: "center",
                    flexDirection: "row",
                }}
            >
                <View
                    pointerEvents = "none"
                >
                    <Toggle
                        ref = {refs => this.toggle = refs}
                        checkAssigned = {this.props.checkAssigned}
                        height = {this.props.toggleHeight}
                        toggleOnImage = {this.props.toggleOnImage}
                        toggleOffImage = {this.props.toggleOffImage}
                        width = {this.props.toggleWidth}
                    />
                </View>

                <Text
                    style = {{
                        color: "black",
                        fontSize: 20,
                        marginLeft: 10,
                    }}
                >
                    {this.props.label}
                </Text>
            </TouchableOpacity>
        )
    }
}