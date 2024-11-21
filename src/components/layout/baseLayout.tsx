import React, { PropsWithChildren } from 'react';
import { ImageBackground, ImageSourcePropType, KeyboardAvoidingView, Platform } from 'react-native';
import { Colors } from 'src/theme/colors';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Box from '../box';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface IProps {
  backgroundColor?: Colors;
  backgroundGradient?: {
    colors: string[];
    start: { x: number; y: number };
    end: { x: number; y: number };
  };
  backgroundImage?: {
    source: ImageSourcePropType;
    resizeMode: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
  };
}

const BaseLayout: React.FC<PropsWithChildren<IProps>> = ({ children, ...props }) => {
  const { top, bottom } = useSafeAreaInsets();

  const renderBackground = () => {
    if (props.backgroundImage) {
      if (props.backgroundGradient) {
        return (
          <>
            <ImageBackground
              source={props.backgroundImage.source}
              resizeMode={props.backgroundImage.resizeMode}
              style={styles.flexView}
            />
            <LinearGradient
              colors={props.backgroundGradient.colors}
              style={styles.gradientBackground}
              start={props.backgroundGradient.start}
              end={props.backgroundGradient.end}
            />
          </>
        );
      }

      return (
        <ImageBackground
          source={props.backgroundImage.source}
          resizeMode={props.backgroundImage.resizeMode}
          style={styles.flexView}
        />
      );
    }

    return null;
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <Box flex={1} backgroundColor={props.backgroundColor}>
        {renderBackground()}
        <Box paddingTop={top} paddingBottom={bottom}>
          {children}
        </Box>
      </Box>
    </KeyboardAvoidingView>
  );
};

export default BaseLayout;
