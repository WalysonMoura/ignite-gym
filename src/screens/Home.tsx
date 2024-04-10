import { ExerciseCard } from '@/components/ExerciseCard';

import { FlatList } from '@gluestack-ui/themed';
import { HStack } from '@gluestack-ui/themed';
import { Text, VStack } from '@gluestack-ui/themed';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@/routes/app.routes';
import { Heading } from '@gluestack-ui/themed';
import { HomeHeader } from '@/components/HomeHeader';
export function Home() {
  const [groups, setGroups] = useState(['Costas', 'Bíceps', 'Tríceps', 'ombro']);
  const [exercises, setExercises] = useState([
    'Puxada frontal',
    'Remada curvada',
    'Remada unilateral',
    'Levantamento terras',
  ]);
  const [groupSelected, setGroupSelected] = useState('Costas');

  const navigator = useNavigation<AppNavigatorRoutesProps>();

  function handleOpenExerciseDetails() {
    navigator.navigate('exercise');
  }
  return (
    <VStack flex={1}>
      {/*  <HomeHeader /> */}
      <VStack px={8}>
        <HStack justifyContent="space-between" mb={5}>
          <Heading color="$gray200" fontSize="$md" fontFamily="$heading">
            Exercícios
          </Heading>
          <Text color="$gray200" fontSize="$sm">
            {exercises.length}
          </Text>
        </HStack>
        {/*  <FlatList
          data={exercises}
          keyExtractor={(item: any) => item}
          renderItem={({}) => <ExerciseCard onPress={handleOpenExerciseDetails} />}
        /> */}
      </VStack>
      <Text>hh</Text>
    </VStack>
  );
}
