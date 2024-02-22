import Searcher from '../components/Searcher/index.js';
import LastedReleases from '../components/LastedReleases/index.js';
import Footer from '../components/Footer/index.js';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100vw;
  height: 78vh;

  .li{
    list-style: none !;
  }
`;

function Home() {
  return (
    <AppContainer>
      <Searcher/>
      <LastedReleases/>
      <Footer />
    </AppContainer>
  );
}

export default Home;