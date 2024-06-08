import {Image, ImageSourcePropType, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import stylesObj from './styles';
import {ThemeModelItem} from '../../model/theme/themeModel';
import {useTheme} from '@react-navigation/native';
export interface TabsDataType {
  imageSource?: ImageSourcePropType;
}
interface Props {
  tabData: TabsDataType[];
  onTabPress?: (_index: number) => void;
}

const defaultProps: Props = {
  tabData: [],
  onTabPress: undefined,
};
const CustomTab = (props: typeof defaultProps) => {
  const theme: ThemeModelItem = useTheme();
  const styles = stylesObj(theme?.colors);
  const {tabData, onTabPress} = props;
  const [selectedTab, setSelectedTab] = useState<number>(0);
  return (
    <View style={styles.tabContainer}>
      {tabData.length > 0 &&
        tabData.map((tab, i) => {
          return (
            <TouchableOpacity
              key={i}
              onPress={() => {
                setSelectedTab(i);
                //@ts-ignore
                onTabPress(i);
              }}
              style={{
                ...styles.tab,
                backgroundColor:
                  selectedTab === i
                    ? theme.colors.tealTransparent
                    : 'transparent',
              }}>
              <Image source={tab?.imageSource} style={styles.tabImage} />
            </TouchableOpacity>
          );
        })}
    </View>
  );
};

export default CustomTab;
