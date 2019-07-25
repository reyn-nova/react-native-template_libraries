import React from 'react';
import {
    View,
} from 'react-native';

import PropTypes from 'prop-types';

import CheckItem from './CheckItem';

export default class RadioButtons extends React.Component {
    static propTypes = {
        options: PropTypes.array.isRequired,
        toggleOnImage: PropTypes.any.isRequired,
        toggleOffImage: PropTypes.any.isRequired,
    }
    
    state = {
        choosenOptionIndex: -1,
    }

    render() {
        return this.props.options.map((item, index) => {
            return (
                <View
                    key = {index.toString()}
                    style = {{
                        marginTop: index == 0 ? 0 : 20,
                    }}
                >
                    <CheckItem
                        checkAssigned = {this.state.choosenOptionIndex == index}
                        label = {item}
                        onPress = {() => {
                            this.setState({choosenOptionIndex: index})
                        }}
                        toggleHeight = {this.props.toggleHeight}
                        toggleOnImage = {this.props.toggleOnImage}
                        toggleOffImage = {this.props.toggleOffImage}
                        toggleWidth = {this.props.toggleWidth}
                    />
                </View>
            )
        })
    }
}