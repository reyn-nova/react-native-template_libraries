import React from 'react'
import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native'

export default class ModuleExportsModule extends React.Component {
    static navigationOptions = {
        title: "Module Exports",
    }

    state = {
        number: require("../referencesData/Number").value,
    }

    render() {
        return (
            <View
                style = {{
                    alignItems: "center",
                    backgroundColor: "white",
                    flex: 1,
                    justifyContent: "space-between",
                    paddingHorizontal: 20,
                }}
            >
                <View
                    style = {{
                        flex: 0.3,
                        justifyContent: "center",
                    }}
                >
                    <Text
                        style = {{
                            fontSize: 24,
                            marginTop: 25,
                            textAlign: "center",
                        }}
                    >
                        Add or subtract the value,{"\n"}with module.exports{"\n"}the value will be saved temporary{"\n"}until the app terminated
                    </Text>
                </View>

                <View
                    style = {{
                        alignItems: "center",
                        flex: 1,
                        justifyContent: "center",
                    }}
                >
                    <TouchableOpacity
                        onPress = {() => this.ChangeValue(1)}
                    >
                        <Text
                            style = {{
                                fontSize: 64,
                                fontWeight: "700",
                            }}
                        >
                            +
                        </Text>
                    </TouchableOpacity>

                    <Text
                        style = {{
                            fontSize: 64,
                        }}
                    >
                        {this.state.number}
                    </Text>

                    <TouchableOpacity
                        onPress = {() => this.ChangeValue(-1)}
                    >
                        <Text
                            style = {{
                                fontSize: 64,
                                fontWeight: "700",
                            }}
                        >
                            -
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    ChangeValue(valueToMix) {
        if(this.state.number + valueToMix >= 0) {
            require("../referencesData/Number").value = this.state.number + valueToMix
    
            this.setState({number: this.state.number + valueToMix})
        }
    }
}