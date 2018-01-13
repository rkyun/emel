import React, { Component } from 'react';

import { Text, View, TouchableHighlight, FlatList } from 'react-native';

import ShoeModel from './ShoeModel';

import ListViewItem from './ListViewItem';

import ShoeService from './ShoeService';

let dataList = ShoeService.findAll();


class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: dataList
    }
  }

  render() {
   
  
     console.log(dataList);
    

    return (
      <View style={{ flex: 1, marginLeft: 10, marginRight: 10 }}>
        <Text>1223</Text>
         
        <FlatList
          data={dataList}
          renderItem={({item}) => <ListViewItem data={item} />}
        />
      </View>
    )
  }
};

module.exports = ListView;