import React, { PropsWithChildren } from 'react';
import { View } from 'react-native';
import { ScaledSize } from '../../theme/size';
import { Colors } from '../../theme/colors';
import styles from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export interface IProps {
  alignSelf?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  alignX?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  alignY?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  backgroundColor?: Colors;
  borderColor?: string;
  borderRadius?: ScaledSize;
  borderWidth?: ScaledSize;
  boxShadow?: string;
  debug?: boolean;
  height?: ScaledSize;
  horizontalGapBetweenObjects?: number;
  layout?: 'vertical' | 'horizontal' | 'wrap';
  margin?: ScaledSize;
  marginBottom?: ScaledSize;
  marginHorizontal?: ScaledSize;
  marginLeft?: ScaledSize;
  marginRight?: ScaledSize;
  marginTop?: ScaledSize;
  marginVertical?: ScaledSize;
  padding?: ScaledSize;
  paddingBottom?: ScaledSize;
  paddingHorizontal?: ScaledSize;
  paddingLeft?: ScaledSize;
  paddingRight?: ScaledSize;
  paddingTop?: ScaledSize;
  paddingVertical?: ScaledSize;
  verticalGapBetweenObjects?: number;
  width?: ScaledSize;
}

const Container: React.FC<PropsWithChildren<IProps>> = ({ children, debug, ...props }) => {
  const { top, bottom } = useSafeAreaInsets();

  if (debug) {
    props.borderWidth = 1;
    props.borderColor = Colors.BLACK;
  }

  const classes = styles(props);
  return (
    <View style={{ ...classes, paddingTop: top, paddingBottom: bottom }}>{children}</View>
  );
};

export default Container;