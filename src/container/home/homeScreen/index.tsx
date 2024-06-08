import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import useHomeScreenVeiwController from './homeScreenVeiwController';
import CustomTab from '../../../common/components/customTab';

import CustomText from '../../../common/components/custonText';
import {AuthModel} from '../../../common/model/auth/authModel';
import Settings from '../../../common/components/Settings';
import Spacer from '../../../common/components/utility/Spacer';
import {scaleSize} from '../../../common/utils/scaleSheetUtils';
import {Images} from '../../../common/constants/images';
const HomeScreen = () => {
  const {
    styles,
    tabData,
    users,
    loading,
    handlOnTabPress,
    selectedTabIndex,
    textStyle,
  } = useHomeScreenVeiwController();

  const renderUsers = () => {
    return (
      <View>
        {loading ? (
          <View>
            <Text>Loading...</Text>
          </View>
        ) : (
          <FlatList
            data={users}
            keyExtractor={user => user.email as string}
            renderItem={({item, index}: {item: AuthModel; index: number}) => {
              return (
                <TouchableOpacity style={styles.userCont}>
                  <View style={styles.profileImgeCon}>
                    <Image
                      source={Images.PROFILE}
                      style={styles.profileImage}
                    />
                  </View>
                  <CustomText text={item.email} textStyle={textStyle.black16} />
                </TouchableOpacity>
              );
            }}
          />
        )}
      </View>
    );
  };

  const renderHeader = (): React.ReactElement => {
    return <View style={styles.headerCont}></View>;
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      <Spacer height={scaleSize(20)} />
      <View style={styles.mainContainer}>
        {selectedTabIndex === 0 ? renderUsers() : <Settings />}
      </View>
      <View style={styles.bottonTabs}>
        <CustomTab tabData={tabData} onTabPress={handlOnTabPress} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
