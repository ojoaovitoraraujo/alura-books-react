import styled from "styled-components";
import Input from "../Input";
import { useState } from "react";
import {books} from './SearchData';

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

function Searcher(){
    const [searchedBooks, setsearchedBooks] = useState([]);



    return (
        <SearcherContainer>
            <div>
                <Titulo>Já sabe por onde começar?</Titulo>
                <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
                <Input 
                    placeholder="Procure sua próxima leitura"
                    onBlur={e => {
                        const value = e.target.value;
                        const filteredBooks = books.filter(book => book.name.toLowerCase().includes(value.toLowerCase()));
                        setsearchedBooks(filteredBooks);
                    }}
                />
            </div>
            <SearchResultContainer>
                {searchedBooks.map(book => (
                    <SearchResult>
                        <img src={book.src} alt={book.src} />
                        <p>{book.name}</p>
                    </SearchResult>
                ))}
            </SearchResultContainer>
        </SearcherContainer>
    );
}

export default Searcher;