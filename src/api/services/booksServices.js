import apiClient from '../../helpers/apiClient'

class BooksService {
    getAllBooks = (page, limit) => apiClient().get(`books/allbooks/${page}/${limit}`)

    addNewBook =(book)=> apiClient().post('books/newbook',book)

    bookBook =(id)=> apiClient().post('books/booking', {id:id})
}

export default new BooksService();