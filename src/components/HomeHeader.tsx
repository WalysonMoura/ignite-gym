import { HStack, Heading, Text, VStack } from '@gluestack-ui/themed';
import { UserPhoto } from './UserPhoto';
import React from 'react';

export function HomeHeader() {
  return (
    <HStack bg="$gray600" pt={16} pb={5} px={8} alignItems="center">
      <UserPhoto
        source={{ uri: 'https://github.com/WalysonMoura.png' }}
        size={55}
        alt="Imagem do usuário"
      />

      <VStack flex={1}>
        <Text color="gray.100" fontSize="$md">
          Olá,
        </Text>
        <Heading color="$gray100" fontSize="md" fontFamily="heading">
          Walyson
        </Heading>
      </VStack>
    </HStack>
  );
}
