import React from 'react';

import {
  Alert,
  View,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

export default class QRCodeScannerModule extends React.Component {
  static navigationOptions = {
    title: "QR Code Scanner",
  }

  onSuccess = (e) => {
    Alert.alert(
      "Result",
      e.data,
      [
        {
          text: 'Done',
          onPress: () => this.props.navigation.pop(),
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  }

  render() {
    return (
      <View
        style = {{
          backgroundColor: "black",
          flex: 1,
        }}
      >
        <QRCodeScanner
          onRead = {this.onSuccess}
        />
      </View>
    );
  }
}