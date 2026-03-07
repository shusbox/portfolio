import styled from '@emotion/styled';
import { theme } from './theme';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.bg_light};
  box-sizing: border-box;
  overflow: scroll;
`;

export const Divider = styled.div`
  min-width: 100%;
  min-height: 1px;
  background-color: ${theme.colors.border};
`;