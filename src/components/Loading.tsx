import { Center, Spinner } from '@gluestack-ui/themed';
import { THEME } from '~/theme';

export function Loading() {
  return (
    <Center flex={1} bg={THEME.tokens.colors.gray[700]}>
      <Spinner color={THEME.tokens.colors.green[500]} />
    </Center>
  );
}
