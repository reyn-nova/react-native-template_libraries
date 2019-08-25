import React from 'react'
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from 'react-native'

export default class KeyboardAvoidingScrollView extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView
                behavior = {Platform.OS == "ios" ? "padding" : null}
                style = {{
                    flex: 1,
                }}
            >
                <ScrollView
                    style = {{
                        flex: 1,
                    }}
                >
                    {this.props.children}
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}