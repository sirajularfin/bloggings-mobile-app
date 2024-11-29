import React, { PropsWithChildren } from 'react';
import { Text as NativeText } from 'react-native';

interface IProps {}

const Text: React.FC<PropsWithChildren<IProps>> = ({ children }) => {
  return <NativeText>{children}</NativeText>;
};

export default Text;
