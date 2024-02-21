import Header from './components/Header/index.js';
import Searcher from './components/Searcher/index.js';
import LastedReleases from './components/LastedReleases/index.js';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);

  .li{
    list-style: none !;
  }
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Searcher/>
      <LastedReleases/>
    </AppContainer>
  );
}

export default App;