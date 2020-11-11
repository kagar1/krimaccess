import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TabEmployee from '../../config/navigation/TabEmployee';

export default class HomeEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <TabEmployee />
    );
  }
}
