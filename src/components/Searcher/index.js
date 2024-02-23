import styled from "styled-components";
import Input from "../Input";
import { useEffect, useState } from "react";
import { getBooks } from "../../services/books";
import { postFavoriteBooks, getFavoriteBooks } from "../../services/favorites";

const SearcherContainer = styled.section`
    padding: 20px;
    color: #fff;    
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
    text-align: center;
`
const Titulo = styled.h2`
    color:  #FFF;
    font-size: 3rem;
    margin: 0 0;
`
const Subtitulo = styled.h3`
    color:  #FFF;
    font-size: 1.2rem;
`
const SearchResultContainer = styled.div`
    display: flex;
    justify-content: center;
`
const SearchResult = styled.div`
    margin: 2rem;
    text-align: center;
`

const SearchResultImg = styled.img`
    width: 15rem;
`

function Searcher(){
    const [searchedBooks, setsearchedBooks] = useState([]); 
    const [books, setBooks] = useState([])
    const [favoriteBooks, setFavoriteBooks] = useState([])

    useEffect(() => {
        fetchBooks()
        fetchFavoriteBooks()
    }, [])

    async function fetchBooks(){
        const booksAPI = await getBooks()
        setBooks(booksAPI)
    }

    async function fetchFavoriteBooks(){
        const favoriteBooksAPI = await getFavoriteBooks()
        setFavoriteBooks(favoriteBooksAPI)
    }

    return (
        <SearcherContainer>
            <div>
                <Titulo>Já sabe por onde começar?</Titulo>
                <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
                <Input 
                    placeholder="Procure sua próxima leitura"
                    onBlur={e => {
                        const value = e.target.value;
                        if(value){
                            const filteredBooks = books.filter(book => book.name.toLowerCase().includes(value.toLowerCase()));
                            setsearchedBooks(filteredBooks);
                        }
                    }}
                />
            </div>
            <SearchResultContainer>
                {searchedBooks.map(book => (
                    <SearchResult>
                        <SearchResultImg src={book.src} alt={book.src} />
                        <p>{book.name}</p>
                        <button disabled={favoriteBooks.find(favoriteBook => favoriteBook.id === book.id) ? true : false} onClick={() => postFavoriteBooks(book.id)} >Add to Fav</button>
                    </SearchResult>
                ))}
            </SearchResultContainer>
        </SearcherContainer>
    );
}

export default Searcher;