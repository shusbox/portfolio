import styled from '@emotion/styled';
import { theme } from '../../theme';

export const BoldText = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
`;

export const BaseText = styled.p`
  margin: 0;
`;

export const HyperLink = styled.a`
  margin: 0;
  color: ${theme.colors.black};
  text-decoration: underline;
  cursor: pointer;
`;

export const Container = styled.div`
  margin: 40px 0 40px 0;
  width: 85%;
  display: flex;
  justify-content: space-between;
  gap: 60px;
`;

export const TextContainer = styled.div`
  min-width: 80px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const LeftText = styled(TextContainer)`
  align-items: flex-start;
`;

export const RightText = styled(TextContainer)`
  align-items: flex-end;
`;