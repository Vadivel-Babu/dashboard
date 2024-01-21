

import './App.css'
import Navbar from './components/Navbar'
import { Route,Routes } from 'react-router'
import Dashboard from './components/Dashboard'
import Createuser from "./components/Createuser"
import Createauthor from './components/Createauthor'
import Booktable from './components/Booktable'
import Authortable from './components/Authortable'
import EditAuthor from './components/EditAuthor'
import EditBook from './components/EditBook'

function App() {
  

  return (
    <div className="flex">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}>
          <Route index path='books' element={<Booktable/>}/>
          <Route  path='author' element={<Authortable/>}/>
        </Route>
        <Route path='author/:id' element={<EditAuthor/>}/>
        <Route path='book/:id' element={<EditBook/>}/>
        <Route path='/createbook' element={<Createuser/>}/>
        <Route path='/createauthor' element={<Createauthor/>}/>
      </Routes>
    </div>
  )
}

export default App
