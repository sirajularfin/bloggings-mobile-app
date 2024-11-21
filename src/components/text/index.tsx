import React, { PropsWithChildren } from 'react';
import { Colors } from 'src/theme/colors';
import { TouchableOpacity, Text as NativeText, TextProps, TextStyle } from 'react-native';

export enum FontVariant {
  DISPLAY_LARGE = 'displayLarge',
  DISPLAY_MEDIUM = 'displayMedium',
  DISPLAY_SMALL = 'displaySmall',
  HEADING_LARGE = 'headingLarge',
  HEADING_MEDIUM = 'headingMedium',
  HEADING_SMALL = 'headingSmall',
  BODY_LARGE = 'bodyLarge',
  BODY_MEDIUM = 'bodyMedium',
  BODY_SMALL = 'bodySmall',
  LABEL_LARGE = 'labelLarge',
  LABEL_MEDIUM = 'labelMedium',
  LABEL_SMALL = 'labelSmall',
}

interface Props
  extends Pick<TextProps, 'numberOfLines' | 'allowFontScaling'>,
    Pick<TextStyle, 'textAlign' | 'fontWeight'> {
  color?: Colors;
  variant?: FontVariant;
  onPress?: () => void;
}

const Text: React.FC<PropsWithChildren<Props>> = ({ children, ...props }) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <NativeText
        allowFontScaling={props.allowFontScaling ?? true}
        numberOfLines={props.numberOfLines}
        style={[
          {
            color: props.color,
            textAlign: props.textAlign,
            fontWeight: props.fontWeight,
          },
        ]}
      >
        {children}
      </NativeText>
    </TouchableOpacity>
  );
};

export default Text;
