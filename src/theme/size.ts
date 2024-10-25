import { useWindowDimensions } from 'react-native';
import { moderateScale } from '../utils/metrics';

const { width, height } = useWindowDimensions();

export enum ScaledSize {
  SCREEN_WIDTH = width,
  SCREEN_HEIGHT = height,
  Size_12 = moderateScale(12),
  Size_14 = moderateScale(14),
  Size_16 = moderateScale(16),
  Size_24 = moderateScale(24),
  Size_30 = moderateScale(30),
  Size_32 = moderateScale(32),
  Size_50 = moderateScale(50),
}
