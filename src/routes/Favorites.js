import Searcher from '../components/Searcher/index.js';
import Footer from '../components/Footer/index.js';
import styled from 'styled-components';
import FavoritesSection from '../components/FavoritesSection/index.js'

const AppContainer = styled.div`
  width: 100vw;
  height: 78vh;

  .li{
    list-style: none !;
  }
`;

function Favorites() {
  return (
    <AppContainer>
      <Searcher/>

      <FavoritesSection />
      
      <Footer />
    </AppContainer>
  );
}

export default Favorites;