import {
  BoldText,
  BaseText,
  Container,
  TextContainer,
  Icon,
} from './style';

const Preview = () => {
  return (
    <Container>
      <Icon> 📋 </Icon>
      <BoldText> 열심히만드는중 </BoldText>
      <TextContainer>
        <BaseText> 부산소프트웨어마이스터고등학교 5기 진수화 </BaseText>
        <BaseText> shusbox@naver.com </BaseText>
      </TextContainer>
    </Container>
  );
}

export default Preview;