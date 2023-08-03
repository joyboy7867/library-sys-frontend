import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import Navbar from './Navbar';
import { useRef } from 'react';
import Card from './Card';

const Home = () => {
  const host="https://library-sys-backend.onrender.com";
    const navigate = useNavigate();
    const[bookarry,setbookarry]=useState([]);
   

   
    useEffect(() => {
        if(localStorage.getItem("token")){
            console.log("ok")
            getnotes();
            
        }
        else{
            navigate("/login")
        }
    },[bookarry])
    const ref=useRef(null) ;
    const refclose=useRef(null);
    let json;
    const[addote,setaddnote]=useState({id:"",title:"",author:"",descp:""});
    
    function onchange(e){
        setaddnote({...addote,[e.target.name]:e.target.value})
        e.preventDefault();
    }
    async function submit(e){
        e.preventDefault();
        const response=await fetch(`${host}/addnotes`,{
            method:"POST",
            headers:{
                "Content-type":"application/x-www-form-urlencoded"
            },
            body:new URLSearchParams(addote)
        })
        json=await response.json();
        setbookarry(json)
        
        

        
    }

    async function getnotes(){
        
        const response=await fetch(`${host}/addnotes`,{
            method:"GET"
        })

         json=await response.json();
         setbookarry(json)
        
        

        
    }

    
    function updatenote(currentnotes){
        ref.current.click();
        setaddnote({id:currentnotes._id,title:currentnotes.title,author:currentnotes.title,descp:currentnotes.descp})
        


    }

    function handlechangenew(e){
        setaddnote({...addote,[e.target.name]:e.target.value})
        console.log(addote);

    }

   async function handledelete(currentnote){
        
        const response=await fetch(`${host}/delete`,{
            method:"delete",
            headers:{
                "Content-type":"application/x-www-form-urlencoded"
            },
            body:new URLSearchParams({id:currentnote._id})
        })

        

    }


    async function update(e){
        e.preventDefault();
        const response=await fetch(`${host}/update`,{
            method:"PUT",
            headers:{
                "Content-type":"application/x-www-form-urlencoded"
            },
            body:new URLSearchParams(addote)
        })
        
        

        
    }
    function rerender(){
        getnotes();
    }
    
    

    
  

    
    

    

    return <div className='background'>

        <Navbar/>

<button ref={ref}  type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">EDIT NOTE</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">

      <form>
          <div className="form-group">
            <label htmlfor="etitle">
              <h3>title</h3>
            </label>
            <input
              type="text"
             
              className="form-control"
              id="etitle"
              name="title"
              aria-describedby="emailHelp"
              onChange={handlechangenew}
              placeholder="Enter text"
              minLength={5}
              required
            />
             </div>
          <div className="form-group">
            <label htmlfor="description">
              <h3>author</h3>
            </label>
            <input
              type="text"
              
              className="form-control"
              id="author"
              name="author"
                onChange={handlechangenew}
              placeholder="edescription"
              minLength={5}
              required
            />

          </div>
            
         
          <div className="form-group">
            <label htmlfor="description">
              <h3>description</h3>
            </label>
            <input
              type="text"
              
              className="form-control"
              id="edescp"
              name="descp"
                onChange={handlechangenew}
              placeholder="edescription"
              minLength={5}
              required
            />
          </div>
          
          
        </form>


      </div>
      <div className="modal-footer">
        <button ref={refclose} onClick={rerender} type="button" className="btn btn-outline-success" data-bs-dismiss="modal">Close</button>
        <button onClick={update} className='btn btn-outline-success'  type='button'>update</button>
      </div>
    </div>
  </div>
</div>
        
       
        

        
        <form onSubmit={submit} className='addnoteform'>
                <h2>ADD BOOK</h2>
                    <div className="form-outline mb-4">
                        <input onChange={onchange} type="text" id="form4Example1" name="title" placeholder='Book name' className="form-control" />
                    </div>
                    <div className="form-outline mb-4">
                        <input  onChange={onchange} type="text" id="form4Example2" name="author" placeholder='Author' className="form-control" />
                    </div>
                    <div className="form-outline mb-4">
                        <textarea  onChange={onchange}  className="form-control" name="descp" placeholder='Description' id="form4Example3" rows="4"></textarea>
                    </div>
                    <button  type="submit" className="btn btn-outline-success btn-block mb-4">ADD</button>
        </form>



        








        <div className='row'>
          {(bookarry.length===0)?<h1>No Book Available</h1>:<h1>Available Books..</h1>};
            {bookarry.map(ele=>{
                return(
                    
                    <Card key={ele._id}  note={ele} update={updatenote} delete={handledelete} />
                
                    

                )
            })}
        </div>
       
       
    </div>;
}



export default Home;
