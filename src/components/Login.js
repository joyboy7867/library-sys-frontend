import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
const Login = () => {
  const host="https://library-sys-backend.onrender.com";
    const[verfuser,setverfuser]=useState({})
    const navigate = useNavigate();

    function handlechange(e){
        setverfuser({...verfuser,[e.target.name]:e.target.value})
        console.log(verfuser);

        e.preventDefault();
    }


    async function handlesubmit(e){

          e.preventDefault();
        
        const response=await fetch(`${host}/login`,{
            method:"POST",
            headers:{
                "Content-type":"application/x-www-form-urlencoded"
            },
            body: new URLSearchParams(verfuser)
        
        })
        
        const json=await response.json()
          
        let a= localStorage.setItem('token',json.jwtdata)

        if(json.success){
          
          navigate("/")
        }else{
          
          navigate("/register")
          alert("Plz register...credential was incorrect")
        }
        

        
        

        
        
    }
    function toregister(){
      navigate("/register")
    }




    return <div>
        <section className="h-100 gradient-form" style={{backgroundColor: "#eee"}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-xl-10">
        <div className="card rounded-3 text-black">
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="card-body p-md-5 mx-md-4">

                <div className="text-center">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                    style={{width: "185px"}} alt="logo"/>
                  <h4 className="mt-1 mb-5 pb-1">We are The Team JoyBoy</h4>
                </div>

                <form onSubmit={handlesubmit}>
                  <p>Please login to your account</p>

                  <div className="form-outline mb-4">
                    <input onChange={handlechange} type="email" name="username" id="form2Example11" className="form-control"
                      placeholder="Phone number or email address" />
                    <label className="form-label" for="form2Example11">Username</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input onChange={handlechange} type="password" name='password' password="password" id="form2Example22" className="form-control" />
                    <label className="form-label" for="form2Example22">Password</label>
                  </div>

                  

                  <div className="d-flex align-items-center justify-content-center pb-4">
                    
                    <button type="submit" className="btn btn-outline-danger">SIGN IN</button>
                  </div>

                </form>
                <div className="d-flex align-items-center justify-content-center pb-4">
                    <p className="mb-0 me-2">Don't have an account?</p>
                    <button type="submit" onClick={toregister} className="btn btn-outline-danger">Register</button>
                  </div>

              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
              <div className="text-black px-3 py-4 p-md-5 mx-md-4">
                <h4 className="mb-4">We are more than just a Group</h4>
                <p className="small mb-0">A Library system to store book info in database for easy access</p>
                <p className="small mb-0">Project related to DBMS</p>
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



export default Login;