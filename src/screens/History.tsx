import { HistoryCard } from '@/components/HistoryCard';
import { Loading } from '@/components/loading';
import { HistoryByDayDTO } from '@/dtos/HistoryByDayDTO';
import { HistoryDTO } from '@/dtos/HistoryDTO';
import { api } from '@/services/api';
import { AppError } from '@/utils/erros/AppError';
import { Heading, SectionList, Text, useToast, VStack } from '@gluestack-ui/themed';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

const fetchHistory = async () => {
  const { data } = await api.get('/history');

  return data;
};

const toast = useToast();

export function History() {
  const [isLoading, setLoading] = useState(true);
  const [exercises, setExercises] = useState<HistoryByDayDTO[]>([]);

  const { data, isPending, error } = useQuery({
    queryKey: ['history'],
    queryFn: () => fetchHistory,
  });

  if (error) {
    const isAppError = error instanceof AppError;
    const title = isAppError ? error.message : 'Não foi possível carregar os detalhes do exercício';

    toast.show({
      
    }),
  }

  return (
    <VStack flex={1}>
      {isPending ? (
        <Loading />
      ) : (
        <SectionList
          sections={exercises}
          keyExtractor={(item: any) => {
            return item.id;
          }}
          renderItem={({ item }: any) => <HistoryCard data={item} />}
          renderSectionHeader={({ section }: any) => <Heading>{section.title}</Heading>}
          px={8}
          contentContainerStyle={exercises.length === 0 && { flex: 1, justifyContent: 'center' }}
          ListEmptyComponent={() => (
            <Text color="$gray100" textAlign="center">
              Não há exercícios registrados ainda.{'\n'}
              Vamos fazer exercícios hoje?
            </Text>
          )}
          showsVerticalScrollIndicator={false}
        />
      )}
    </VStack>
  );
}
