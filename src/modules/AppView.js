import React, {PropTypes, Component} from 'react';
import {View, StyleSheet, ActivityIndicator,Text} from 'react-native';
import store from '../redux/store';

class AppView extends Component {
  static displayName = 'AppView';
  render() {
    return (
      <View style={{flex: 1}}>
         <Text>hasbdjalorem lorem  apiente ultricies aperiam irure adipisci nisl repellat. Eaque habitant augue commodo dapibus, quisque quae dolor consequuntur vehicula adipisci taciti irure? Saepe. Eveniet maxime aliquet. Magnis, commodi, natoque eget molestie laborum, platea. Delectus, ipsuapiente ultricies aperiam irure adipisci nisl repellat. Eaque habitant augue commodo dapibus, quisque quae dolor consequuntur vehicula adipisci taciti irure? Saepe. Eveniet maxime aliquet. Magnis, commodi, natoque eget molestie laborum, platea. Delectus, ipsuasdasdassbdk</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    alignSelf: 'center'
  }
});

export default AppView;
