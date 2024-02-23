import axios from "axios"

const favoritesAPI = axios.create({baseURL: 'http://localhost:8000/favoritos'})

async function getFavoriteBooks(){
    const response = await favoritesAPI.get('/getFavoriteBooks')
    return response.data
}

function postFavoriteBooks(bookId){
    const booksList = []
    booksList.push(bookId)
    const response = favoritesAPI.post('/addBookToFavorite', booksList)
    return response.data
}

function deleteFavoriteBooks(bookId){
    const response = favoritesAPI.post('/removeBookFromFavorite/' + bookId)
    return response.data
}

export {
    postFavoriteBooks,
    getFavoriteBooks,
    deleteFavoriteBooks

}