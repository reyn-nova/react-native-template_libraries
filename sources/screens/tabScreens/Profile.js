import React from 'react';
import {
    Text,
    View,
} from 'react-native'

export default class Profile extends React.Component {
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
                    Profile
                </Text>
            </View>
        )
    }
}