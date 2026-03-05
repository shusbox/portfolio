import styled from '@emotion/styled';
import { theme } from '../../theme';

export const Text = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
`;

export const Container = styled.div`
  margin: 60px 0 80px 0;
  width: 85%;
  display: flex;
  flex-direction: column;
  gap: 52px;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ImgContainer = styled.div`
  display: flex;
  gap: 20px;
  overflow: scroll;
`;

export const Img = styled.div`
  min-width: 320px;
  min-height: 180px;
  background-color: ${theme.colors.nautral};
`;