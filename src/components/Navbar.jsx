import { NavLink } from "react-router-dom"


const Navbar = () => {
  return (
    <div className='nav' >
      <NavLink to='/' className="link">Dashboard</NavLink>
      <NavLink to='createbook' className="link">Create Book</NavLink>
      <NavLink to='createauthor' className="link">Create Author</NavLink>
    </div>
  )
}

export default Navbar