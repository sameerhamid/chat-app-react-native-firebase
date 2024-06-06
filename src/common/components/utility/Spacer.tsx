import React from 'react';
import {View} from 'react-native';
import {scaleSize} from '../../utils/scaleSheetUtils';

interface Props {
  height?: number;
}

const defaultProps: Props = {
  height: scaleSize(0),
};

const Spacer = (props: typeof defaultProps): React.ReactElement => {
  const {height} = props;
  if (!height) {
    throw new Error('Spacer requires a height prop.');
  }

  const styles = {
    spacer: {
      height: scaleSize(height),
    },
  };

  return <View style={styles.spacer} />;
};
export default Spacer;
