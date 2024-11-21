import React, { PropsWithChildren } from 'react';
import { Pressable } from 'react-native';
import styles from './styles';
import { TButtonType } from './types';
import Text, { FontVariant } from '../text';
import { FontType } from '../../theme/typography';
import { Colors } from '../../theme/colors';
import Box from '../box';
import { ScaledSize } from '../../theme/size';

interface Props {
  type: TButtonType;
  onPress: () => void;
}

const Button: React.FC<PropsWithChildren<Props>> = ({ children, ...props }) => {
  const classes = styles();
  return (
    <Pressable onPress={props.onPress} style={classes[props.type]}>
      <Box marginHorizontal={ScaledSize.Size_30} height={ScaledSize.Size_50}>
        <Text variant={[FontVariant.LabelLarge, FontType.Bold]} color={Colors.white}>
          {children}
        </Text>
      </Box>
    </Pressable>
  );
};

export default Button;
