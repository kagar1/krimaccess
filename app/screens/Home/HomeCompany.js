import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TabCompanyNav from '../../config/navigation/TabCompanyNav';

export default class HomeCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <TabCompanyNav />
    );
  }
}
