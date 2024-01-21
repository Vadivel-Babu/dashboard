import { createContext, useState } from "react"


export const Authorcontext = createContext(); 

const AuthorContext = ({children}) => {
  const [authors,setAuthors] = useState([]);
  function addAuthor(data){
    setAuthors([...authors,data]);
  }
  
  function editAuthor(data){
    setAuthors(authors.map((author) => {
      if(author.id === data.id){
        author = data;
      }
      return author;
    }))
  }
  function deleteAuthor(id){
    const filtered = authors.filter((author) => author.id !== id)
    setAuthors(filtered) 
  }
  return (
    <Authorcontext.Provider value={{addAuthor,authors,deleteAuthor,editAuthor}}>
      {children}
    </Authorcontext.Provider>
  )
}

export default AuthorContext