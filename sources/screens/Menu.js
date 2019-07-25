import React from 'react'
import {
    FlatList,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'

export default class Menu extends React.Component {
    static navigationOptions = {
        title: "React-Native Template",
    }

    render() {
        let navigation = this.props.navigation

        let list = [
            {
                name: "Material Input Form",
                onPress: () => navigation.push("MaterialInputFormModule"),
            },
            {
                name: "Currency Input Form & Formatter",
                onPress: () => navigation.push("CurrencyInputFormAndFormatterModule"),
            },
            {
                name: "Material Dropdown Form",
                onPress: () => navigation.push("MaterialDropdownFormModule"),
            },
            {
                name: "Module Exports",
                onPress: () => navigation.push("ModuleExportsModule"),
            },
            {
                name: "Toggle",
                onPress: () => navigation.push("ToggleModule"),
            },
            {
                name: "Check Item",
                onPress: () => navigation.push("CheckItemModule"),
            },
            {
                name: "Radio Button",
                onPress: () => navigation.push("RadioButtonModule"),
            },
            {
                name: "Calendar",
                onPress: () => navigation.push("CalendarModule"),
            },
            {
                name: "Top Tab Navigator",
                onPress: () => navigation.push("TopTabNavigatorModule"),
            },
            {
                name: "Bottom Tab Navigator",
                onPress: () => navigation.push("BottomTabNavigatorModule"),
            },
            {
                name: "Image Picker & Viewer",
                onPress: () => navigation.push("ImagePickerAndViewerModule"),
            },
            {
                name: "QR Code Scanner",
                onPress: () => navigation.push("QRCodeScannerModule"),
            },
            {
                name: "React-Native-Maps",
                onPress: () => navigation.push("ReactNativeMapsModule"),
            },
            {
                name: "Realm Local Storage",
                onPress: () => navigation.push("RealmLocalStorageModule"),
            },
            {
                name: "Redux",
                onPress: () => navigation.push("ReduxModule"),
            },
        ]

        return (
            <View
                style = {{
                    backgroundColor: "whitesmoke",
                    flex: 1,
                }}
            >
                <FlatList
                    data         = {list}
                    keyExtractor = {(item, index) => index.toString()}
                    renderItem   = {({item, index}) => {
                        return (
                            <TouchableOpacity
                                disabled = {item.onPress == null}
                                onPress  = {() => item.onPress()}
                                style       = {{
                                    backgroundColor: "white",
                                    borderBottomWidth: 1.5,
                                    borderColor: "lightgray",
                                    padding: 20,
                                }}
                            >
                                <Text
                                    style = {{
                                        color: "black",
                                        fontSize: 20,
                                    }}
                                >
                                    {item.name}
                                </Text>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        )
    }
}