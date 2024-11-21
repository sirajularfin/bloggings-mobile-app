import React, { PropsWithChildren } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { Colors } from '../../theme/colors';
import styles from './styles';
import { IProps } from './types';

/**
 * Generic component for creating a container with various styles
 * @returns React Function Component
 */
const Box: React.FC<PropsWithChildren<IProps>> = ({ children, debug, ...props }) => {
  if (debug) {
    props.borderWidth = 1;
    props.borderColor = Colors.BLACK;
  }

  const classes = styles(props);
  return <View style={classes as StyleProp<ViewStyle>}>{children}</View>;
};

export default Box;
