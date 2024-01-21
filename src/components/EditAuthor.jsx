import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useFormik } from 'formik';
import { useNavigate,useParams } from 'react-router';
import { useContext } from 'react';
import { Authorcontext } from '../Context/AuthorContext';

const EditAuthor = () => {
  const {editAuthor,authors} = useContext(Authorcontext);
   const navigate = useNavigate();
   const {id} = useParams();
   
   const getAuthor = authors.find((a) => a.id === id)
   const validate = values => {
   let errors = {};
   
   if(!values.authorName){
    errors.authorName = 'Authore Name Required'
   }
  
   if(!values.bio){
    errors.bio = 'biograph Required'
   }else if (!(`${values.bio}`.length >= 25) ) {
     errors.bio = 'Minimum 25 character required';
   }

   if(!values.DOB){
    errors.DOB = 'Date Of Birth Required'
   } 
   return errors;
 };
  const formik = useFormik({
     initialValues: {
       id:getAuthor.id,
       bio: getAuthor.bio,
       authorName: getAuthor.authorName,
       DOB:getAuthor.DOB
     },
     validate,
     onSubmit: values => {
     
      editAuthor(values);
      navigate('/author');
     },
   });
  return (
    <div className='create'>
      <form className='form' onSubmit={formik.handleSubmit}>
         <TextField
          id="outlined-password-input"
          label="Author Name"
          name='authorName'
          type="text"
          color="secondary"
          error={formik.errors.authorName ? true : false}
          onChange={formik.handleChange}
         value={formik.values.authorName}
        />
        {formik.errors.authorName ? <div className="error">{formik.errors.authorName}</div> : null}
         <TextField 
          type="date" 
          name="DOB"
          color="secondary"
          error={formik.errors.DOB ? true : false}
          onChange={formik.handleChange}
         value={formik.values.DOB}
         />
         {formik.errors.DOB ? <div className="error">{formik.errors.DOB}</div> : null}
         <TextField
          id="outlined-password-input"
          label="Short biography"
          multiline
          minRows={4}
          color="secondary"
          name='bio'
          error={formik.errors.bio ? true : false}
          onChange={formik.handleChange}
          value={formik.values.bio}
        />
        {formik.errors.bio ? <div className="error">{formik.errors.bio}</div> : null}
        <Button variant="contained" color="secondary" type='submit'>
          Submit
        </Button>
        <Button variant="outlined" color="secondary" type='submit' onClick={() => navigate(-1)}>
          cancel
        </Button>
      </form>
    </div>
  )
}

export default EditAuthor;