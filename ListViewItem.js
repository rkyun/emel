import React, {Component} from 'react';
import {TouchableHighlight, View, Text, Dimensions} from 'react-native';
import ShoeService from './ShoeService';


class ListViewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    }
  }


  componentWillReceiveProps(props) {
    this.setState({
      data: props.data
    })
  }

  getSize() {
    return {
        width: Dimensions.get('window').width, 
        height: Dimensions.get('window').height
    }
  }

  render(){
    const data = this.state.data;
    const width = Dimensions.get('window').width;
    return (
     <TouchableHighlight underlayColor={'#eee'} style={{paddingTop: 6, paddingBottom: 6, backgroundColor: "#F8F8F8", borderBottomWidth:1, borderColor: '#eee'}} {...this.props.sortHandlers}>
      <View style={{flexDirection: 'column', alignItems: 'center', width: width}}>
          <Text style={{fontSize:18}}>{data.shoeId}</Text>
          <Text style={{fontSize:18}}>{data.toe}</Text>
          <Text style={{fontSize:18}}>{data.tab}</Text>
      </View>
     </TouchableHighlight>
    )
  }
}

module.exports = ListViewItem;