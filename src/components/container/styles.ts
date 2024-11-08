import { FlexAlignType } from 'react-native';
import { IProps } from '.';

const styles = (props: IProps) => ({
  backgroundColor: props.backgroundColor,

  // Flex
  alignItems: props.layout !== 'vertical' ? props.alignX : props.alignY,
  alignSelf: props.alignSelf as FlexAlignType | undefined,
  flexDirection:
    props.layout === 'horizontal' ? 'column' : props.layout === 'vertical' ? 'row' : undefined,
  flexWrap: props.layout === 'wrap' ? 'wrap' : 'nowrap',
  justifyContent: props.layout !== 'horizontal' ? props.alignY : props.alignX,

  // Border
  borderColor: props.borderColor,
  borderRadius: props.borderRadius,
  borderWidth: props.borderWidth,
  boxShadow: props.boxShadow,

  // Margin and padding
  margin: props.margin,
  marginBottom: props.marginBottom,
  marginHorizontal: props.marginHorizontal,
  marginLeft: props.marginLeft,
  marginRight: props.marginRight,
  marginTop: props.marginTop,
  marginVertical: props.marginVertical,
  padding: props.padding,
  paddingBottom: props.paddingBottom,
  paddingHorizontal: props.paddingHorizontal,
  paddingLeft: props.paddingLeft,
  paddingRight: props.paddingRight,
  paddingTop: props.paddingTop,
  paddingVertical: props.paddingVertical,

  // Gap between objects
  rowGap: props.verticalGapBetweenObjects,
  columnGap: props.horizontalGapBetweenObjects,

  // Size
  width: props.width,
  height: props.height,
});

export default styles;
