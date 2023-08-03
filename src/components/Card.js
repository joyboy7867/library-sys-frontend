import React, { useState } from 'react';
import { useRef } from 'react';
const Card = (props) => {
  
 
  
  
  const{note,update}=props;
  return <div className='col-lg-4 col-md-12 col-sm-12 maincard  my-5 mx-4'>
          <div className="card my-6">
        <div className="card-body disnote">
        <h5 className="card-title">Title :{note.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Author :{note.author}</h6>
        <p className="card-text">Description :{note.descp}</p>
        <button onClick={()=>{update(note)}}   className='btn btn-outline-dark' >Edit</button>
        <button onClick={()=>{props.delete(note)}} className='btn btn-outline-dark' >Delete</button>
       


        </div>
        </div>
        </div>;
     
     
      
    
    
    

           


  
   
  

  

    ;
}



export default Card;