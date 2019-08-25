import React from 'react'
import {
    Text,
    View,
} from 'react-native'

import CurrencyTextField from '../helpers/CurrencyTextField'

import KeyboardAvoidingScrollView from '../helpers/KeyboardAvoidingScrollView'

export default class CurrencyInputFormAndFormatterModule extends React.Component {
    static navigationOptions = {
        title: "Currency Input Form & Formatter",
    }

    state = {
        income: 0,
        outcome: 0,
    }

    render() {
        return(
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
                        <CurrencyTextField
                            ref = {refs => this.incomeInput = refs}
                            label = "Income"
                            onChangeText = {() => {
                                setTimeout(() => {
                                    this.setState({income: this.incomeInput.input.getRawValue()})
                                }, 250)
                            }}
                        />

                        <View
                            style = {{
                                marginBottom: 20,
                            }}
                        />

                        <CurrencyTextField
                            ref = {refs => this.outcomeInput = refs}
                            label = "Outcome"
                            onChangeText = {() => {
                                setTimeout(() => {
                                    this.setState({outcome: this.outcomeInput.input.getRawValue()})
                                }, 100)
                            }}
                        />
                    </View>
                </KeyboardAvoidingScrollView>

                <View
                    style = {{
                        alignItems: "flex-end",
                        borderTopWidth: 1,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        padding: 20,
                    }}
                >
                    <Text
                        style = {{
                            fontSize: 20,
                        }}
                    >
                        Left
                    </Text>

                    <Text
                        style = {{
                            fontSize: 28,
                            fontWeight: "700",
                        }}
                    >
                        {"Rp. " + (this.state.income - this.state.outcome).toLocaleString("id")}
                    </Text>
                </View>
            </View>
        )
    }
}