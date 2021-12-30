/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView, FlatList} from 'react-native';
import Vegetable from './src/components/Vegetable';

const App = () => {
  const vegetable = [
    {id: 1, name: 'Hoa Quả Tươi Sạch  '},
    {id: 2, name: 'Rau Củ Quả Tươi Sạch '},
    {id: 3, name: 'Rau Củ Xuất Khẩu '},
    {id: 4, name: 'Hoa Quả Xuất Khẩu '},
    {id: 5, name: 'Rau Củ Nhập Khẩu'},
    {id: 6, name: 'Hoa Quả Nhập Khẩu'},
  ];
  return (
    <SafeAreaView>
      <FlatList
        // horizontal
        // showsHorizontalScrollIndicator={false}
        data={vegetable}
        renderItem={({item}) => <Vegetable vegetable={item} />}
        keyExtractor={item => {
          item.id;
        }}
        contentContainerStyle={{paddingLeft: 16, paddingRight: 16}}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingLeft: 16,
    paddingRight: 16,
    margin: 10,
  },
});
