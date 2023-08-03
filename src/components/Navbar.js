import React from 'react';
import { useNavigate } from "react-router-dom";
const Navbar = () =>{
    const navigate = useNavigate();
    function logout(){
        localStorage.removeItem("token")
        navigate("/login")
    }

    return <div>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
            <div className="container-fluid">
              <a className="navbar-brand" href="/"><h3>DAYDREAM LIBRARY</h3></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
              
              <button onClick={logout} className='logout btn  btn-outline-success'>Logout</button>
                </div>
              </div>
            
        </nav>
        </div>;
        
        



        

   
}



export default Navbar;