import React from 'react'
import {
    Dimensions,
    Image,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'

import ImageView from 'react-native-image-view'

import {
    InsertPicture,
} from '../helpers/ImagePicker'

import {
    SetImages,
} from '../helpers/ImageViews'

export default class ImagePickerAndViewerModule extends React.Component {
    static navigationOptions = {
        title: "Image Picker & Viewer",
    }

    state = {
        imageUri: null,
        isImageViewVisible: false,
    }

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
                <View
                    style = {{
                        borderWidth: 5,
                        height: Dimensions.get("screen").width - 40,
                        width: Dimensions.get("screen").width - 40,
                    }}
                >
                    <TouchableOpacity
                        activeOpacity = {0.6}
                        onPress = {() => InsertPicture(this.state.imageUri != null, (uri) => this.setState({imageUri: uri}), () => this.setState({isImageViewVisible: true}))}
                        style = {{
                            alignItems: "center",
                            flex: 1,
                            justifyContent: "center",
                        }}
                    >
                        {
                            this.state.imageUri == null ?
                                <View
                                    style = {{
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Text
                                        style = {{
                                            fontSize: 32,
                                            fontWeight: "700",
                                        }}
                                    >
                                        Insert Picture
                                    </Text>
                                </View>
                                :
                                <Image
                                    resizeMode = "cover"
                                    source = {{uri: this.state.imageUri}}
                                    style = {{
                                        height: "100%",
                                        width: "100%",
                                    }}
                                />
                        }
                    </TouchableOpacity>
                </View>

                <ImageView
                    images = {SetImages([this.state.imageUri])}
                    onClose = {() => this.setState({isImageViewVisible: false})}
                    isVisible = {this.state.isImageViewVisible}
                />
            </View>
        )
    }
}