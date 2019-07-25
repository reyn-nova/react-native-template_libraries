import React, { Component } from 'react'
import { 
    Text,
    TouchableOpacity,
    View,
} from 'react-native'

import {
    connect,
} from 'react-redux'

import {
    bindActionCreators,
} from 'redux'

import {
    ChangeColor,
} from '../action/ColorActions'

const mapStateToProps = (state) => {
    const {
        color,
    } = state

    return {
        color,
    }
}

class ChangeBackgroundColor extends Component {
    static navigationOptions = {
        title: "Change Background Color",
    }

    render() {
        return (
            <View
                style = {{
                    alignItems: "center",
                    backgroundColor: this.props.color.current,
                    flex: 1,
                    justifyContent: "center",
                }}
            >
                <TouchableOpacity
                    onPress = {() => this.props.ChangeColor("white")}
                    style = {{
                        backgroundColor: "white",
                        borderRadius: 5,
                        borderWidth: 2,
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        width: 275,
                    }}
                >
                    <Text
                        style = {{
                            color: "black",
                            fontSize: 25.5,
                            fontWeight: "400",
                            textAlign: "center",
                        }}
                    >
                        White
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress = {() => this.props.ChangeColor("lightcoral")}
                    style = {{
                        backgroundColor: "lightcoral",
                        borderRadius: 5,
                        borderWidth: 2,
                        marginTop: 20,
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        width: 275,
                    }}
                >
                    <Text
                        style = {{
                            color: "black",
                            fontSize: 25.5,
                            fontWeight: "400",
                            textAlign: "center",
                        }}
                    >
                        Light Coral
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress = {() => this.props.ChangeColor("lightgreen")}
                    style = {{
                        backgroundColor: "lightgreen",
                        borderRadius: 5,
                        borderWidth: 2,
                        marginTop: 20,
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        width: 275,
                    }}
                >
                    <Text
                        style = {{
                            color: "black",
                            fontSize: 25.5,
                            fontWeight: "400",
                            textAlign: "center",
                        }}
                    >
                        Light Green
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress = {() => this.props.ChangeColor("paleturquoise")}
                    style = {{
                        backgroundColor: "paleturquoise",
                        borderRadius: 5,
                        borderWidth: 2,
                        marginTop: 20,
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        width: 275,
                    }}
                >
                    <Text
                        style = {{
                            color: "black",
                            fontSize: 25.5,
                            fontWeight: "400",
                            textAlign: "center",
                        }}
                    >
                        Pale Turquoise
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress = {() => this.props.ChangeColor("moccasin")}
                    style = {{
                        backgroundColor: "moccasin",
                        borderRadius: 5,
                        borderWidth: 2,
                        marginTop: 20,
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        width: 275,
                    }}
                >
                    <Text
                        style = {{
                            color: "black",
                            fontSize: 25.5,
                            fontWeight: "400",
                            textAlign: "center",
                        }}
                    >
                        Moccasin
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        ChangeColor,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ChangeBackgroundColor)