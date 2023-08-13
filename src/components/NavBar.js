import React ,{useContext} from "react";
import { Link ,useLocation } from "react-router-dom";
import AlertContext from "../context/notes/alertContext";

const NavBar = () => {
    let location = useLocation();
    const handleLogout = ()=>{
      localStorage.removeItem("token");
      showAlert("Logged Out Successfully" , "success");
    }
    let token = localStorage.getItem('token');
    const context1  = useContext(AlertContext);
    const{showAlert} = context1;
  
  return (
    <nav className='navbar navbar-expand-lg bg-dark border-bottom border-bottom-dark' data-bs-theme="dark">
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          Navbar
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current='page' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} to='/about'>
                About
              </Link>
            </li>
          </ul>
          <div className='d-flex'>
            {!token ?
            <>
            <Link className="btn btn-primary mx-2" to="/login" role="button">Login</Link>
            <Link className="btn btn-primary mx-2" to="/signup" role="button">Signup</Link>
            </>
            :
            <Link className="btn btn-danger mx-2" onClick={handleLogout} to="/login" role="button">Logout</Link>
            }
              
             
          
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
