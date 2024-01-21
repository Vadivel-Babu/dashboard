import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useContext } from "react";
import {Bookcontext} from "../Context/BookContext";
import { useNavigate } from "react-router-dom";

const columns = [
  { id: 'id', label: 'id', minWidth:'max-content' },
  { id: 'Title', label: 'Title', minWidth:'max-content' },
  { id: 'Author', label: 'Author', minWidth: 'max-content' },
  { id: 'ISBN', label: 'ISBN', minWidth: 'max-content' },
  { id: 'Date', label: 'Date', minWidth: 'max-content' },
  { id: 'Action', label: 'Action', minWidth: 'max-content' }   
];

const Booktable = () => {
  const {books, deleteBook} = useContext(Bookcontext);
  const navigate = useNavigate();
  if(books.length === 0){
    return <h1 style={{textAlign:'center'}}>No data</h1>
  }
  return (
     <table >
      <thead>
        <tr>
          {columns.map((el) => <td key={el.id} className="tablecell">{el.label}</td>)}
        </tr>
      </thead>
      <tbody>
        {books.map((book,i) => (
          <tr key={book.id}>
            <td>{i +1}</td>
            <td>{book.bookTitle}</td>
            <td>{book.authorName}</td>
            <td>{book.ISBN}</td>
            <td>{book.date}</td>
            <td>
              <IconButton aria-label="delete" color="error" onClick={() => deleteBook(book.id)}>
                <DeleteIcon />
              </IconButton>
              <IconButton aria-label="delete" color="secondary" onClick={() => navigate(`/book/${book.id}`)}>
                <EditIcon />
              </IconButton>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Booktable