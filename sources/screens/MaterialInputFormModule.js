import React from 'react'
import {
    View,
} from 'react-native'

import KeyboardAvoidingScrollView from '../helpers/KeyboardAvoidingScrollView'
import TextField from '../helpers/TextField'

export default class MaterialInputFormModule extends React.Component {
    static navigationOptions = {
        title: "Material Input Form",
    }

    render() {
        return (
            <View
                style = {{
                    backgroundColor: "white",
                    flex: 1,
                }}
            >
                <KeyboardAvoidingScrollView>
                    <View
                        style = {{
                            padding: 20,
                        }}
                    >
                        <TextField
                            ref = {refs => this.nameInput = refs}
                            label = "Name"
                            onSubmitEditing = {() => this.passwordInput.input.focus()}
                        />

                        <View
                            style = {{
                                marginBottom: 20,
                            }}
                        />

                        <TextField
                            ref = {refs => this.passwordInput = refs}
                            label = "Password"
                            onSubmitEditing = {() => this.emailInput.input.focus()}
                            secureTextEntry
                        />

                        <View
                            style = {{
                                marginBottom: 20,
                            }}
                        />

                        <TextField
                            ref = {refs => this.emailInput = refs}
                            label = "Email"
                            onSubmitEditing = {() => this.phoneNumberInput.input.focus()}
                            keyboardType = "email-address"
                        />

                        <View
                            style = {{
                                marginBottom: 20,
                            }}
                        />

                        <TextField
                            ref = {refs => this.phoneNumberInput = refs}
                            label = "Phone Number"
                            onSubmitEditing = {() => this.addressInput.input.focus()}
                            keyboardType = "phone-pad"
                        />

                        <View
                            style = {{
                                marginBottom: 20,
                            }}
                        />

                        <TextField
                            ref = {refs => this.addressInput = refs}
                            label = "Address"
                            multiline
                        />
                    </View>
                </KeyboardAvoidingScrollView>
            </View>
        )
    }
}