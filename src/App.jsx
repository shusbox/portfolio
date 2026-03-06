import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Preview from './components/preview';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import {
  Container,
  Divider
} from './style';

const Portfolio = () => {
  return (
    <Container>
      <Header />
      <Main />
      <Divider />
      <Footer />
    </Container>
  );
}

const App = () => {
  return (
    <BrowserRouter>    
      <Routes>
        <Route path="/" element={ <Preview /> } />
        <Route path="/portfolio" element={ <Portfolio /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;