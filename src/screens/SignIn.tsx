import {
  Button,
  ButtonText,
  Center,
  Heading,
  Image,
  ScrollView,
  Text,
  View,
  VStack,
} from '@gluestack-ui/themed';
import React from 'react';
import BackgroundImg from '../assets/background.png';

export function SignIn() {
  return (
    <ScrollView
      maxWidth="100%"
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}>
      <VStack flex={1} px={10} pb={16} maxWidth="100%">
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="Pessoas treinando"
          resizeMode="contain"
          position="absolute"
        />
        <Center>
          <Text color="$gray100" fontSize="$sm">
            Treine sua mente e o seu corpo.
          </Text>
        </Center>

        <Center>
          <Heading color="$gray100" fontSize="$xl" mb={6} fontFamily="$heading">
            Acesse a conta
          </Heading>
          <Button>
            <ButtonText>Acessar</ButtonText>
          </Button>
        </Center>
        <Center mt={24}>
          <Text color="$gray100" fontSize="$sm" mb={3} fontFamily="$body">
            Ainda não tem acesso?
          </Text>
          <Button>
            <ButtonText>Criar Conta</ButtonText>
          </Button>
        </Center>
      </VStack>
    </ScrollView>
  );
}
