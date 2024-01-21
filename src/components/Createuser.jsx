
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { Bookcontext } from '../Context/BookContext';
import uuid from 'react-uuid';

const Createuser = () => {
  const navigate = useNavigate();
  const {addBook} = useContext(Bookcontext);
  const validate = values => {
   let errors = {};
   if (!values.bookTitle) {
     errors.bookTitle = 'Book Title Required';
   } 
   if(!values.authorName){
    errors.authorName = 'Authore Name Required'
   }
  
   if(!values.ISBN){
    errors.ISBN = 'ISBN Required'
   }else if (!(`${values.ISBN}`.length >= 10) ) {
     errors.ISBN = 'ISBN number should contain 10 numbers';
   }

   if(!values.date){
    errors.date = 'Date Required'
   } 
   return errors;
 };
  const formik = useFormik({
     initialValues: {
       bookTitle: '',
       authorName: '',
       ISBN:'',
       date:''
     },
     validate,
     onSubmit: values => {
      const data = {
        ...values,
        id:uuid().substring(0,4)
      }
      addBook(data);
      navigate('/books')
     },
   });
  return (
    <div className='create'>
      <form className='form' onSubmit={formik.handleSubmit}>
         <TextField
          id="outlined-password-input"
          label="Book Title"
          name="bookTitle"
          type="text"
          color="secondary"
          error={formik.errors.bookTitle ? true : false}
          onChange={formik.handleChange}
         value={formik.values.bookTitle}
        />
        {formik.errors.bookTitle ? <div className="error">{formik.errors.bookTitle}</div> : null}
         <TextField
          id="outlined-password-input"
          label="Author Name"
          name="authorName"
          type="text"
          color="secondary"
          error={formik.errors.authorName ? true : false}
          onChange={formik.handleChange}
          value={formik.values.authorName}
        />
        {formik.errors.authorName ? <div className="error">{formik.errors.authorName}</div> : null}
         <TextField
          id="outlined-password-input"
          label="ISBN number"
          name="ISBN"
          type="number"
          color="secondary"
          onChange={formik.handleChange}
         value={formik.values.ISBN}
         error={formik.errors.ISBN ? true : false}
        />
        {formik.errors.ISBN ? <div className="error">{formik.errors.ISBN}</div> : null}
        <TextField 
         type="date" 
         name="date"
         color="secondary"
         onChange={formik.handleChange}
         value={formik.values.date}
         error={formik.errors.date ? true : false}
         />
         {formik.errors.date ? <div className="error">{formik.errors.date}</div> : null}
        <Button variant="contained" color="secondary" type='submit'>
          Submit
        </Button>
      </form>
    </div>
  )
}

export default Createuser