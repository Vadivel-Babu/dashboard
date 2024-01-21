import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useContext } from "react";
import { Authorcontext } from "../Context/AuthorContext";
import { useNavigate } from "react-router-dom";

const columns = [
  { id: 'id', label: 'id', minWidth:'max-content' },
  { id: 'name', label: 'Name', minWidth:'max-content' },
  { id: 'DOB', label: 'DOB', minWidth: 'max-content' },
  { id: 'BIO', label: 'BIO', minWidth: 'max-content' },
  { id: 'Action', label: 'Action', minWidth: 'max-content' }   
];

const Authortable = () => {
  const navigate = useNavigate();
  const {authors, deleteAuthor} = useContext(Authorcontext);

  if(authors.length === 0){
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
        {authors.map((d,i) => {
          return (
            <tr key={d.id}>
              <td>{i + 1}</td>
              <td>{d.authorName}</td>
              <td>{d.DOB}</td>
              <td>{d.bio}</td>
              <td>
                <IconButton aria-label="delete" color="error" onClick={() => deleteAuthor(d.id)}>
                  <DeleteIcon />
                </IconButton>
                <IconButton aria-label="delete" color="secondary" onClick={() => navigate(`/author/${d.id}`)}>
                  <EditIcon />
                </IconButton>
              </td>
            </tr>
        )})}
        <tr>
          
        </tr>
        
        
      </tbody>
    </table>
  )
}

export default Authortable