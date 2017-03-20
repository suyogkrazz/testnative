
import {Provider} from 'react-redux';
import store from './src/redux/store';
import AppViewContainer from './src/modules/AppViewContainer';
import React, {Component} from 'react';
import {AppRegistry, BackAndroid,Text,View} from 'react-native';

class weather extends Component {
  componentWillMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.navigateBack);
  }
  navigateBack() {
  }
  render() {
    return (
      <Provider store={store}>
        <View>asdas asdasddasdas</View>
        <AppViewContainer />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('weather', () => weather);
