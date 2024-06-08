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
import {scaleFontSize, scaleSize} from '../../../common/utils/scaleSheetUtils';
import {Images} from '../../../common/constants/images';
import CustomActivityIndicator from '../../../common/components/customActivityIndicator';
import {screenHeight, screenWidth} from '../../../common/constants/dimensions';
const HomeScreen = () => {
  const {
    styles,
    tabData,
    users,
    loading,
    handlOnTabPress,
    selectedTabIndex,
    textStyle,
    handleChatPress,
  } = useHomeScreenVeiwController();

  const renderEmptyView = (): React.ReactElement => {
    return (
      <View
        style={{
          width: '100%',
          height: scaleSize(150),
          backgroundColor: 'grey',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: scaleSize(20),
          marginTop: scaleSize(30),
        }}>
        <CustomText text="No user found" txtSize={30} />
      </View>
    );
  };
  const renderUsers = () => {
    return (
      <View>
        {loading ? (
          <CustomActivityIndicator visible={loading} />
        ) : users.length > 0 ? (
          <FlatList
            data={users}
            keyExtractor={user => user.email as string}
            renderItem={({item, index}: {item: AuthModel; index: number}) => {
              return (
                <TouchableOpacity
                  style={styles.userCont}
                  onPress={() => {
                    handleChatPress(item);
                  }}>
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
        ) : (
          renderEmptyView()
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
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
