import { IInputProps } from '@gluestack-ui/input/lib/typescript/types';
import { FormControl, Input as GluestackInput, InputField } from '@gluestack-ui/themed';
import React = require('react');

type Props = IInputProps & {
  errorMesage?: string | null;
};

export function Input({ errorMessage = null, isInvalid, ...rest }: Props) {
  const invalid = !!errorMessage || isInvalid;
  return (
    <FormControl isInvalid={}>
      <GluestackInput
        bg="gray.700"
        h={14}
        px={4}
        borderWidth={0}
        fontSize="md"
        color="white"
        fontFamily="body"
        isInvalid={invalid}
        
        placeholderTextColor=""
        {...rest}>
        <InputField placeholder="Enter Text here" />
      </GluestackInput>
    </FormControl>
  );
}
