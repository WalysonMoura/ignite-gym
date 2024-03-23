import { Pressable, Text } from '@gluestack-ui/themed';
import React from 'react';

export type IPressable = typeof Pressable;

type Props = IPressable & {
  name: string;
  isActive: boolean;
};

export function Group({ name, isActive, ...rest }: Props) {
  return (
    <Pressable
      mr={3}
      w={24}
      h={10}
      bg="gray.600"
      rounded="$md"
      justifyContent="flex-end"
      alignItems="center"
      overflow="hidden"
      $pressed={isActive}
      $pressed-bg={{
        borderColor: 'green.500',
        borderWidth: 1,
      }}
      $pressed-borderColor="$green500"
      $pressed-borderWidth={1}
      {...rest}>
      <Text
        textTransform="uppercase"
        fontWeight="$bold"
        fontSize="$xs"
        color={isActive ? '$green500' : '$green200'}>
        {name}
      </Text>
    </Pressable>
  );
}
