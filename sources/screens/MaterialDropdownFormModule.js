import React from 'react';
import {
    View,
} from 'react-native';

import {
    Dropdown,
} from 'react-native-material-dropdown'

export default class MaterialDropdownFormModule extends React.Component {
    static navigationOptions = {
        title: "Material Dropdown Form",
    }

    render() {
        return (
            <View
                style = {{
                    backgroundColor: "white",
                    flex: 1,
                    padding: 20,
                }}
            >
                <View
                    style = {{
                        marginTop: -15,
                    }}
                >
                    <Dropdown
                        label = "Gender"
                        data = {[
                            {
                                value: "Male",
                            },
                            {
                                value: "Female",
                            },
                        ]}
                    />
                </View>

                <View
                    style = {{
                        marginTop: 5,
                    }}
                >
                    <Dropdown
                        label = "Nationality"
                        data = {[
                            {
                                value: "United States",
                            },
                            {
                                value: "Canada",
                            },
                            {
                                value: "United Kingdoms",
                            },
                        ]}
                    />
                </View>
            </View>
        )
    }
}