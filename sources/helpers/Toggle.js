import React from 'react';
import {
    Image,
    TouchableOpacity,
} from 'react-native';

import PropTypes from 'prop-types';

export default class Toggle extends React.Component {
    static propTypes = {
        checkAssigned: PropTypes.bool,
        height: PropTypes.number,
        toggleOffImage: PropTypes.any.isRequired,
        toggleOnImage: PropTypes.any.isRequired,
        width: PropTypes.number,
    }

    state = {
        toggleOn: false,
    }

    render() {
        return (
            <TouchableOpacity
                activeOpacity = {0.6}
                onPress = {() => {
                    this.setState({toggleOn: !this.state.toggleOn})
                }}
            >
                <Image
                    resizeMode = "contain"
                    source = {(this.props.checkAssigned != undefined ? this.props.checkAssigned : this.state.toggleOn) ? this.props.toggleOnImage : this.props.toggleOffImage}
                    style = {{
                        height: this.props.height == undefined ? 30 : this.props.height,
                        width: this.props.width == undefined ? 30 : this.props.width,
                    }}
                />
            </TouchableOpacity>
        )
    }
}