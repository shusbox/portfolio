import {
  BoldText,
  BaseText,
  HyperLink,
  Container,
  LeftText,
  RightText,
} from './style';

const Footer = () => {
  return (
    <Container>
      <LeftText>
        <BoldText> 진수화 </BoldText>
        <BaseText> 부산소프트웨어마이스터고등학교 </BaseText>
      </LeftText>
      <RightText>
        <BaseText> shusbox@naver.com </BaseText>
        <HyperLink href='https://github.com/shusbox'> 깃허브 </HyperLink>
      </RightText>
    </Container>
  );
}

export default Footer;