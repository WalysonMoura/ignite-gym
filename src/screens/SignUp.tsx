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

import { yupResolver } from '@hookform/resolvers/yup';

import React from 'react';

import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@/assets/background.png';
import { Controller, useForm } from 'react-hook-form';

import * as yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { Input } from '@/components/Input';

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
};

const signUpSchema = yup.object({
  name: yup.string().required('Informe o nome.'),
  email: yup.string().required('Informe o e-mail').email('E-mail inválido.'),
  password: yup
    .string()
    .required('Informe a senha')
    .min(6, 'A senha deve ter pelo menos 6 dígitos.'),

  password_confirm: yup
    .string()
    .required('Confirme a senha.')
    .oneOf([yup.ref('password'), ''], 'A confirmação da senha não confere'),
});

export function SignUp() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  });

  const navigation = useNavigation();
  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <VStack flex={1} pb={16}>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="Pessoas treinando"
          resizeMode="contain"
          position="absolute"
        />
        <Center my={24}>
          <LogoSvg />
          <Text color="gray.100" $md-fontFamily='$heading'>
            Treine sua mente e o seu corpo.
          </Text>
        </Center>

        <Center>
          <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
            Crie sua conta
          </Heading>

          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <Input errorMesage={errors.name?.message} />
            )}
          />
        </Center>

        <Button onPress={handleGoBack} mt={12}>
          <ButtonText>Voltar para o login</ButtonText>
        </Button>
      </VStack>
    </ScrollView>
  );
}
