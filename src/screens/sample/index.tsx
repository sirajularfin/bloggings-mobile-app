import React from 'react';
import Text, { FontVariant } from '../../components/text';
import Container from '../../components/container';
import Button from '../../components/button';
import { ButtonType } from '../../components/button/types';
import { Font } from '../../theme/typography';

const Sample = () => {
  return (
    <Container width='screen-width' height='screen-height'>
      <Text variant={[FontVariant.HeadingLarge, Font.Bold]}>Welcome</Text>
      <Button
        type={ButtonType.PRIMARY}
        onPress={() => {
          console.log('Button pressed!');
        }}
      >
        Continue
      </Button>
    </Container>
  );
};

export default Sample;
