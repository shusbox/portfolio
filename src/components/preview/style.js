import styled from '@emotion/styled';
import { theme } from '../../theme';

export const BoldText = styled.p`
  margin: 0;
  font-size: 2.4rem;
  font-weight: 600;
`;

export const BaseText = styled.p`
  margin: 0;
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.bg_dark};
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;