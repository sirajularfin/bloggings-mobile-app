import React from 'react';
import Box from 'src/components/box';
import Text from 'src/components/text';
import { Colors } from 'src/theme/colors';
import Button from 'src/components/button';
import t from 'src/integrations/localization/util';
import Logo from 'src/assets/icons/logo.svg';
import bgImage from 'src/assets/images/landing/image.png';
import BaseLayout from 'src/components/layout/baseLayout';

const LOGO_HEIGHT = 65;
const LOGO_WIDTH = 207;

const LandingScreen: React.FC = () => {
  return (
    <BaseLayout
      backgroundImage={{
        source: bgImage,
        resizeMode: 'cover',
      }}
    >
      <Box alignX='center' alignY='center'>
        <Logo width={LOGO_WIDTH} height={LOGO_HEIGHT} color={Colors.WHITE} />
        <Text color={Colors.BLACK}>{t('landing.title')}</Text>
        <Text color={Colors.BLACK}>{t('landing.subtitle')}</Text>
        <Button title={t('landing.cta.label')} />
      </Box>
    </BaseLayout>
  );
};

export default LandingScreen;
