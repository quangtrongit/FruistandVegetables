import React from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';

const HomeScreen = props => {
  console.log(props);
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress={() => console.log('Button onPress')}
        title="Go to Components Demo"
      />
      <TouchableOpacity onPress={() => console.log('button pressd')}>
        <Text>Go to List demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
