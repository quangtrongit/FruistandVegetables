import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const componentsScreen = function () {
  const greeting = 'Trong Tran';
  return (
    <View>
      <Text style={styles.style01}>Getting started with React Native!</Text>
      <Text style={styles.style02}>My name is {greeting}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  style01: {
    fontSize: 45,
  },
  style02: {
    fontSize: 20,
  },
});
export default componentsScreen;
