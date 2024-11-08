import { FlexAlignType } from 'react-native';
import { IProps } from '.';

const styles = (styleProps: IProps) => ({
  backgroundColor: styleProps.backgroundColor,

  // Flex
  alignItems: styleProps.layout !== 'vertical' ? styleProps.alignX : styleProps.alignY,
  alignSelf: styleProps.alignSelf as FlexAlignType | undefined,
  flexDirection:
    styleProps.layout === 'horizontal'
      ? 'column'
      : styleProps.layout === 'vertical'
      ? 'row'
      : undefined,
  flexWrap: styleProps.layout === 'wrap' ? 'wrap' : 'nowrap',
  justifyContent: styleProps.layout !== 'horizontal' ? styleProps.alignY : styleProps.alignX,

  // Border
  borderColor: styleProps.borderColor,
  borderRadius: styleProps.borderRadius,
  borderWidth: styleProps.borderWidth,
  boxShadow: styleProps.boxShadow,

  // Margin and padding
  margin: styleProps.margin,
  marginBottom: styleProps.marginBottom,
  marginHorizontal: styleProps.marginHorizontal,
  marginLeft: styleProps.marginLeft,
  marginRight: styleProps.marginRight,
  marginTop: styleProps.marginTop,
  marginVertical: styleProps.marginVertical,
  padding: styleProps.padding,
  paddingBottom: styleProps.paddingBottom,
  paddingHorizontal: styleProps.paddingHorizontal,
  paddingLeft: styleProps.paddingLeft,
  paddingRight: styleProps.paddingRight,
  paddingTop: styleProps.paddingTop,
  paddingVertical: styleProps.paddingVertical,

  // Gap between objects
  rowGap: styleProps.verticalGapBetweenObjects,
  columnGap: styleProps.horizontalGapBetweenObjects,

  // Size
  width: styleProps.width,
  height: styleProps.height,
});

export default styles;
