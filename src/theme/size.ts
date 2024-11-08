import { useWindowDimensions } from 'react-native';
import { moderateScale } from '../utils/metrics';

const { width, height } = useWindowDimensions();

export enum ScaledSize {
  AUTO = 'auto',
  SCREEN_WIDTH = width,
  SCREEN_HEIGHT = height,
  SIZE_10 = moderateScale(10),
  SIZE_12 = moderateScale(12),
  SIZE_14 = moderateScale(14),
  SIZE_16 = moderateScale(16),
  SIZE_20 = moderateScale(20),
  SIZE_24 = moderateScale(24),
  SIZE_28 = moderateScale(28),
  SIZE_30 = moderateScale(30),
  SIZE_32 = moderateScale(32),
  SIZE_50 = moderateScale(50),
}
