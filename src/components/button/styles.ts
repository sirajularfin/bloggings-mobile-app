import { StyleSheet } from 'react-native';
import { ButtonType } from './types';
import { Colors } from '../../theme/colors';
import { ScaledSize } from '../../theme/size';

const styles = () => {
  return StyleSheet.create({
    [ButtonType.PRIMARY]: {
      backgroundColor: Colors.blueGrey50,
    },
    [ButtonType.SECONDARY]: {
      backgroundColor: Colors.blueGrey900,
    },
  });
};

export default styles;
