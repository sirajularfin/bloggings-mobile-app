import { Colors } from 'src/theme/colors';
import { ScaledSize } from 'src/theme/size';

export interface IProps extends Border, Dimension, Flexbox, Margin, Padding, Position {
  backgroundColor?: Colors;
  debug?: boolean;
}

interface Border {
  borderColor?: string;
  borderRadius?: ScaledSize;
  borderWidth?: ScaledSize;
  boxShadow?: string;
}

interface Dimension {
  height?: ScaledSize;
  width?: ScaledSize;
}

interface Flexbox {
  flex: number;
  alignSelf?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  alignX?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  alignY?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  horizontalGapBetweenObjects?: ScaledSize;
  layout?: 'vertical' | 'horizontal' | 'wrap';
  verticalGapBetweenObjects?: ScaledSize;
}

interface Margin {
  margin?: ScaledSize;
  marginBottom?: ScaledSize;
  marginEnd?: ScaledSize;
  marginHorizontal?: ScaledSize;
  marginLeft?: ScaledSize;
  marginRight?: ScaledSize;
  marginStart?: ScaledSize;
  marginTop?: ScaledSize;
  marginVertical?: ScaledSize;
}

interface Padding {
  padding?: ScaledSize;
  paddingBottom?: ScaledSize;
  paddingEnd?: ScaledSize;
  paddingHorizontal?: ScaledSize;
  paddingLeft?: ScaledSize;
  paddingRight?: ScaledSize;
  paddingStart?: ScaledSize;
  paddingTop?: ScaledSize;
  paddingVertical?: ScaledSize;
}

interface Position {
  bottom?: ScaledSize;
  left?: ScaledSize;
  position?: 'absolute' | 'relative';
  right?: ScaledSize;
  top?: ScaledSize;
}
