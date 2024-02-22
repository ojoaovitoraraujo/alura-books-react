import styled from 'styled-components';
import {Title} from '../Title';
import { useEffect, useState } from "react";
import { getFavoriteBooks } from "../../services/favorites";

const LastedReleasesContainer = styled.section`
    display: flex;
    margin: 2rem
    width: 100%;
    justify-content: center;
`

const BooksContainer = styled.div`
    margin: 0 3vw;
    width: 26%
`

const TitleContainer = styled.div`
    margin: 3rem 0;
`
const FavoriteBooksImg = styled.img`
    width: 15rem;
`

function FavoritesSection(){
    const [favoriteBooks, setFavoriteBooks] = useState([])

    useEffect(() => {
        fetchFavoriteBooks()
    }, [])

    async function fetchFavoriteBooks(){
        const favoriteBooksAPI = await getFavoriteBooks()
        console.log(favoriteBooksAPI)
        setFavoriteBooks(favoriteBooksAPI)
    }

    return (
        <div> 
            <TitleContainer>
                <Title color="#EB9B00" fontSize="36px">Favoritos</Title>
            </TitleContainer>
            <LastedReleasesContainer>
                {favoriteBooks.map((book) => (
                <BooksContainer key={book.id}>
                        <FavoriteBooksImg src={book.src} alt={book.name} />
                        <p>{book.name}</p>
                    </BooksContainer>
                ))}
            </LastedReleasesContainer>            
            
        </div>
    )
}
export default FavoritesSection;