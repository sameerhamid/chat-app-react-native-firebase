import {View, Text} from 'react-native';
import React from 'react';
import PageSkelton from '../../../common/components/pageSkelton/pageSkelton';

const HomeScreen = () => {
  return (
    <PageSkelton isSafeAreaView>
      <Text>HomeScreen</Text>
    </PageSkelton>
  );
};

export default HomeScreen;
