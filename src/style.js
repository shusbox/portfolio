import styled from '@emotion/styled';
import { theme } from './theme';

export const Container = styled.div`
  min-idth: 100vw;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.bg};
  overflow: scroll;
`;

export const Divider = styled.div`
  min-width: 100%;
  min-height: 1px;
  background-color: ${theme.colors.border};
`;