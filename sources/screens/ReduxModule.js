import React, { Component } from 'react'
import { 
    Text,
    TouchableOpacity,
    View,
} from 'react-native'

import {
    connect,
} from 'react-redux'

const mapStateToProps = (state) => {
    const {
        color,
    } = state

    return {
        color,
    }
}

class ReduxModule extends Component {
    static navigationOptions = {
        title: "Redux",
    }

    render() {
        return (
            <View
                style = {{
                    alignItems: "center",
                    backgroundColor: this.props.color.current,
                    flex: 1,
                    justifyContent: "center"
                }}
            >
                <TouchableOpacity
                    onPress = {() => this.props.navigation.push("ChangeBackgroundColor")}
                    style = {{
                        backgroundColor: "mediumseagreen",
                        borderRadius: 5,
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        width: 275,
                    }}
                >
                    <Text
                        style = {{
                            color: "white",
                            fontSize: 25.5,
                            fontWeight: "400",
                            textAlign: "center",
                        }}
                    >
                        Change Background Color
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default connect(mapStateToProps)(ReduxModule)