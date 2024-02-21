import {books} from './lastedReleasesData';
import styled from 'styled-components';
import {Title} from '../Title';
import RecomendationCard from '../RecomendationCard';
import book from "../../images/livro2.png";

const LastedReleasesContainer = styled.section`
    display: flex;
    margin: 2rem
    width: 100%;
    justify-content: center;
`

const BooksContainer = styled.div`
    margin: 0 3vw;
`

const TitleContainer = styled.div`
    margin: 3rem 0;
`

function LastedReleases(){
    return (
        <div> 
            <TitleContainer>
                <Title color="#EB9B00" fontSize="36px">Últimos lançamentos</Title>
            </TitleContainer>
            <LastedReleasesContainer>
                {books.map((book) => (
                    <BooksContainer>
                        <img src={book.src} alt={book.nome} />
                        <p>{book.nome}</p>
                    </BooksContainer>
                ))}
            </LastedReleasesContainer>
            <RecomendationCard 
                title="O homem de giz"
                subtitle="C.J. Tudor"
                description="Um livro de suspense que vai te prender do início ao fim"
                image={book}
            />
            
        </div>
    )
}
export default LastedReleases;