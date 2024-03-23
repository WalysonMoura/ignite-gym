import { IImageProps } from '@gluestack-ui/image/lib/typescript/types';
import { Image } from '@gluestack-ui/themed';
import React from 'react';

type Props = IImageProps & {
  size: number;
};

export function UserPhoto({ size, ...rest }: Props) {
  return (
    <Image w={size} h={size} rounded="$full" borderWidth={2} borderColor="$gray400" {...rest} />
  );
}
