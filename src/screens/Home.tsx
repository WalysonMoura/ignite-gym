import { HomeHeader } from '@/components/HomeHeader';
import { Text, VStack } from '@gluestack-ui/themed';
import React, { useState } from 'react';

export function Home() {
  const [groups, setGroups] = useState(['Costas', 'Bíceps', 'Tríceps', 'ombro']);
  const [exercises, setExercises] = useState([
    'Puxada frontal',
    'Remada curvada',
    'Remada unilateral',
    'Levantamento terras',
  ]);
  const [groupSelected, setGroupSelected] = useState('Costas');

  return (
    <VStack flex={1}>
      <HomeHeader />
      <Text>hh</Text>
    </VStack>
  );
}
