import React from 'react';
import Text, { FontVariant } from 'src/components/text';
import { ScaledSize } from 'src/theme/size';
import { Colors } from 'src/theme/colors';
import Box from 'src/components/box';

const Sample = () => {
  return (
    <Box
      alignX='center'
      alignY='center'
      width={ScaledSize.SCREEN_WIDTH}
      height={ScaledSize.SCREEN_HEIGHT}
    >
      <Text variant={FontVariant.DISPLAY_LARGE} color={Colors.BLACK}>
        Sample
      </Text>
    </Box>
  );
};

export default Sample;
