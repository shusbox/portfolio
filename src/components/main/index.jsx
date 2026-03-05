import Frontend from './frontend';
import Design from './design';
import {
  Text,
  Container,
  ListContainer,
} from './style';

const Main = () => {
  return (
    <Container>
      <ListContainer>
        <Text> 프론트엔드 </Text>
        <Frontend />
      </ListContainer>
      <ListContainer>
        <Text> 디자인 </Text>
        <Design />
      </ListContainer>
    </Container>
  );
}

export default Main;