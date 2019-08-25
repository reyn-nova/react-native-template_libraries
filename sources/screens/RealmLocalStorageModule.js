import React from 'react'
import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native'

import {
    OpenRealm,
} from '../helpers/Realm'

export default class RealmLocalStorageModule extends React.Component {
    static navigationOptions = {
        title: "Realm",
    }

    state = {
        number: 0,
    }

    componentDidMount() {
        this.OpeningRealm()
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
                            textAlign: "center"
                        }}
                    >
                        Add or subtract the value,{"\n"}with Realm{"\n"}the value will be saved
                    </Text>
                </View>

                <View
                    style = {{
                        alignItems: "center",
                        flex: 1,
                        justifyContent: "center"
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

    async OpeningRealm() {
        let numberStore = await OpenRealm("Number")

        if(numberStore.realm.objects(numberStore.name).length == 0) {
            numberStore.realm.write(() => numberStore.realm.create(numberStore.name, {value: 0}))
        } else {
            this.setState({number: numberStore.realm.objects(numberStore.name)[0].value})
        }
    }

    async ChangeValue(valueToMix) {
        let numberStore = await OpenRealm("Number")

        if(this.state.number + valueToMix >= 0) {
            numberStore.realm.write(() => numberStore.realm.objects(numberStore.name)[0].value += valueToMix)
    
            this.setState({number: numberStore.realm.objects(numberStore.name)[0].value})
        }
    }
}