import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import apple from '../../assets/apple.png';

const Vegetable = props => {
  const {vegetable} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>{vegetable.name}</Text>
      <Image style={styles.iconImage} source={apple} />
    </View>
  );
};

export default Vegetable;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    shadowColor: '#000',
    borderRadius: 4,
    backgroundColor: '#FFF',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 0},
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  tittle: {
    textTransform: 'uppercase',
    marginBottom: 8,
    fontWeight: '700',
  },
  iconImage: {
    width: 100,
    height: 100,
  },
});
