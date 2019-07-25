import React from 'react';
import {
    Text,
    View,
} from 'react-native'

export default class Home extends React.Component {
    render() {
        return (
            <View
                style = {{
                    alignItems: "center",
                    backgroundColor: "white",
                    flex: 1,
                    justifyContent: "center",
                }}
            >
                <Text
                    style = {{
                        fontSize: 56,
                    }}
                >
                    Home
                </Text>
            </View>
        )
    }
}