import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import { Container } from './style';

const App = () => {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}

export default App;