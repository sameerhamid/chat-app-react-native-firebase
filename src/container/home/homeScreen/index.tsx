import {
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import useHomeScreenVeiwController from './homeScreenVeiwController';
import CustomTab from '../../../common/components/customTab';

import CustomText from '../../../common/components/custonText';
import {AuthModel} from '../../../common/model/auth/authModel';

import Spacer from '../../../common/components/utility/Spacer';
import {scaleSize} from '../../../common/utils/scaleSheetUtils';
import {Images} from '../../../common/constants/images';
import CustomActivityIndicator from '../../../common/components/customActivityIndicator';
import CustomButton from '../../../common/components/customButton';
import {screenWidth} from '../../../common/constants/dimensions';

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
    userDetails,
    handleLogout,
  } = useHomeScreenVeiwController();

  const renderEmptyView = (): React.ReactElement => {
    return (
      <View style={styles.emptyVw}>
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

  const renderSetting = (): React.ReactElement => {
    return (
      <View style={styles.settingCont}>
        <View style={styles.profileSettinProfileConatiner}>
          <View style={styles.settingProfileImgeContainer}>
            <Image source={Images.PROFILE} style={styles.settingProfileImg} />
          </View>
          <CustomText text={userDetails.name?.toUpperCase()} />
        </View>
        <Spacer height={scaleSize(20)} />
        <View style={{marginHorizontal: scaleSize(20), rowGap: scaleSize(20)}}>
          <View style={styles.settingProfileDetails}>
            <CustomText text={userDetails.email} />
          </View>
          <View style={styles.settingProfileDetails}>
            <CustomText text={userDetails.mobile} />
          </View>
        </View>

        <Spacer height={scaleSize(50)} />
        <CustomButton
          title="Logout"
          btnStyle={styles.logoutBtn}
          onPress={handleLogout}
        />
      </View>
    );
  };

  const renderHeader = (): React.ReactElement => {
    return (
      <View style={styles.headerContainer}>
        <CustomText
          text={selectedTabIndex === 0 ? 'Chat' : 'Setting'}
          textStyle={textStyle.blackBold26}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      <Spacer height={scaleSize(10)} />
      <View style={styles.mainContainer}>
        {selectedTabIndex === 0 ? renderUsers() : renderSetting()}
      </View>
      <View style={styles.bottonTabs}>
        <CustomTab tabData={tabData} onTabPress={handlOnTabPress} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
