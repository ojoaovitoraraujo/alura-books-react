import axios from "axios"

const booksAPI = axios.create({baseURL: 'http://localhost:8000/favoritos'})

async function getFavoriteBooks(){
    const response = await booksAPI.get('/getFavoriteBooks')
    return response.data
}

function postFavoriteBooks(bookId){
    const booksList = []
    booksList.push(bookId)
    const response = booksAPI.post('/addBookToFavorite', booksList)
    return response.data
}
export {
    postFavoriteBooks,
    getFavoriteBooks

}