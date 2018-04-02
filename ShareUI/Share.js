import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import ShareExtension from 'react-native-share-extension'

type Props = {};
export default class Share extends Component<Props> {

  constructor(props) {
    super(props)
    this.state = {
      shareUrl: ''
    }

    this.onShareClose = this.onShareClose.bind(this);

    ShareExtension.data().then(data => {
      this.setState({ shareUrl: data.value })
    })
  }

  onShareClose() {
    ShareExtension.close()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native - Share Extension!
        </Text>
        <Text style={styles.instructions}>
          You are sharing {this.state.shareUrl}
        </Text>
        <Text style={styles.instructions}>
        </Text>
        <Button
          style={styles.instructions}
          onPress={this.onShareClose}
          title="Close"
          accessibilityLabel="Close the Share Extension"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
