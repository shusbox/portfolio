import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import {
  Container,
  Divider
} from './style';

const App = () => {
  return (
    <Container>
      <Header />
      <Main />
      <Divider />
      <Footer />
    </Container>
  );
}

export default App;