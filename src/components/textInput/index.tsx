import React, { PropsWithChildren, useEffect, useState } from 'react';
import { KeyboardType, TextInput as NativeTextInput, View } from 'react-native';
import styles from './styles';

interface Props {
  value: string;
  required: boolean;
  placeholderText: string;
  onChangeText: (text: string) => void;
}

const TextInput: React.FC<PropsWithChildren<Props>> = ({ children, ...props }) => {
  const classes = styles();
  const [keyboardType, setKeyboardType] = useState<KeyboardType>('default');

  useEffect(() => {
    if (/^[a-zA-Z]/.test(props.value.charAt(0))) {
      setKeyboardType('email-address');
    } else if (/^\d$/.test(props.value.charAt(0))) {
      setKeyboardType('decimal-pad');
    } else {
      setKeyboardType('default');
    }
  }, [props.value]);

  return (
    <View style={[classes.container]}>
      <NativeTextInput
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={props.onChangeText}
        placeholder={props.placeholderText}
        value={props.value}
        keyboardType={keyboardType}
        secureTextEntry={
          props.placeholderText === 'Password' || props.placeholderText === 'Confirm Password'
        }
        style={classes.inputText}
      />
    </View>
  );
};

export default TextInput;
