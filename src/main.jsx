import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthorContext from './Context/AuthorContext.jsx'
import BookContext from './Context/BookContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <BookContext>
     <AuthorContext>
      <App />
     </AuthorContext>
    </BookContext>
    </BrowserRouter>
  </React.StrictMode>,
)
