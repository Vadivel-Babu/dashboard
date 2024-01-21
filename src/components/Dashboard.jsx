import { Outlet } from "react-router";

import { NavLink } from "react-router-dom";

const Dashboard = () => {
  
  return ( 
    <div className='dashboard'>
      <div>
        <h3>Click the Link below to see the table</h3>
      <div className="links">
        <NavLink to="books" className="navlink">Books</NavLink>
        <NavLink to="author" className="navlink"> Author</NavLink>
      </div>
      <Outlet/>
      </div>
    </div>
  )
}

export default Dashboard