'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  MapView,
} = React;

var GoneFishin = React.createClass({

  render: function() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          showsUserLocation={true}
          />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },

  map: {
    flex: 1,
  },

});

AppRegistry.registerComponent('GoneFishin', () => GoneFishin);
