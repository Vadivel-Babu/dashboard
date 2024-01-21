import { createContext, useState } from "react"

export const Bookcontext = createContext(null);

const BookContext = ({children}) => {
  const [books,setBooks] = useState([]);
  function addBook(book){
    setBooks([...books,book])
  }
  function editBook(data){
    setBooks(books.map((book) => {
      if(book.id === data.id){
        book = data;
      }
      return book;
    }))
  }
  function deleteBook(id){
    const filteredBook = books.filter((book) => book.id !== id)
    setBooks(filteredBook)
  }
  return (
    <Bookcontext.Provider value={{addBook,books,deleteBook,editBook}}>
      {children}
    </Bookcontext.Provider>
  )
}

export default BookContext