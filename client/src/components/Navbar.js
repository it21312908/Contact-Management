import React, { useContext, } from 'react'
import AuthContext from '../context/AuthContext'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import ToastContext from "../context/ToastContext";


export default function Navbar({title = "CMS"}) {

    // const { toast } = useContext(ToastContext);

    const navigate = useNavigate();
    const {user, setUser} = useContext(AuthContext);
    return (

        <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">{title}</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarColor01">
                    <ul class="navbar-nav ms-auto">
                    {user ? (
              <>
               <li
                  className="nav-item"
                  onClick={() => {
                    setUser(null);
                    localStorage.clear();
                    // toast.success("Logged out.");
                    navigate("/login", { replace: true });
                  }}
                >
               <button className="btn btn-danger">Logout</button>
               </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/login">
                    <a className="nav-link">Login</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register">
                    <a className="nav-link">Register</a>
                  </Link>
                </li>
              </>
            )}
                    </ul>
                </div>
            </div>
        </nav>

    )
}
