
import React, { useState } from 'react';

import { useNavigate } from "react-router-dom";

const Register = () => {
  const host="https://library-sys-backend.onrender.com";
  const navigate = useNavigate();
    const[userdata,setuserdata]=useState({})
    function handlechange(e){
        setuserdata({...userdata,[e.target.name]:e.target.value})
        e.preventDefault();
    }

    async function handlesubmit(e){
      e.preventDefault();
        
        const response=await fetch(`${host}/register`,{
            method:"POST",
            headers:{
                "Content-type":"application/x-www-form-urlencoded"
            },
            body: new URLSearchParams(userdata)
        
        })
      
      const json= await response.json();
      console.log(json)
     
      if(json.errors){
        navigate("/register")
        alert("enter correct credentials.")
      }
      else{
        
        navigate("/login")
        
      }
      
        
      
    }

    function goto(){
      navigate("/login")
    }

    return <div>
            <section className="vh-100" style={{backgroundColor:" #eee"}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius:"25px"}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form onSubmit={handlesubmit} className="mx-1 mx-md-4">

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" onChange={handlechange} id="form3Example1c" name='username' className="form-control" />
                      <label className="form-label" for="form3Example1c">Your Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" onChange={handlechange} id="form3Example3c" name="email" className="form-control" />
                      <label className="form-label" for="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" onChange={handlechange} id="form3Example4c" name="password" className="form-control" />
                      <label className="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>

                  

                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label className="form-check-label" for="form2Example3">
                      I agree all statements in <a href="/about">Terms of service</a>
                    </label>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-outline-success">Register</button>
                  </div>

                </form>
                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" onClick={goto} className="btn btn-outline-primary">Login</button>
                  </div>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt=""/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>;
}


export default Register;