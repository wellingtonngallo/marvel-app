import { GlobalStyle } from './styles/global';
import { BrowserRouter as Router } from 'react-router-dom';
import { CharacterProvider } from './context/getCharacters';
import Routes from './routes';

const App = () => {
  return (
    <>
      <GlobalStyle/>
      <Router>
        <CharacterProvider>
          <Routes/>
        </CharacterProvider>
      </Router>
    </>
  );
}

export default App;
