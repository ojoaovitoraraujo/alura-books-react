import axios from "axios"

const booksAPI = axios.create({baseURL: 'http://localhost:8000/livros'})

async function getBooks(){
    const response = await booksAPI.get('/')

    return response.data
}

function getBook(id){
    const response = booksAPI.get('/getBookById/' + id)

    return response.data
}

function postBook(body){
    const response = booksAPI.post('/addBook', body)

    return response.data
}


function patchBook(id, body){
    const response = booksAPI.patch('/updateBook/' + id, body)

    return response.data
}

function deleteBook(id, body){
    const response = booksAPI.delete('/removeBook/' + id)

    return response.data
}

export {
    getBooks,
    getBook,
    postBook,
    patchBook,
    deleteBook

}