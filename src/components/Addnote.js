import React, { useState } from 'react';

const Addnote = () => {
    const host="https://library-sys-backend.onrender.com";
    const[addote,setaddnote]=useState({});
    const[bookarry,setbookarry]=useState([]);
    function onchange(e){
        setaddnote({...addote,[e.target.name]:e.target.value})
        e.preventDefault();
    }
    async function submit(e){
        const response=await fetch(`${host}addnotes`,{
            method:"POST",
            headers:{
                "Content-type":"application/x-www-form-urlencoded"
            },
            body:new URLSearchParams(addote)
        })

        const json=await response.json();
        console.log(json)
        setbookarry(json)
        console.log(bookarry)

        e.preventDefault();
    }

    return <div> 
        <form onSubmit={submit} className='addnoteform'>
                    
                    <div className="form-outline mb-4">
                        <input onChange={onchange} type="text" id="form4Example1" name="title" className="form-control" />
                        <label className="form-label" for="form4Example1">Book title</label>
                    </div>

                    
                    <div className="form-outline mb-4">
                        <input  onChange={onchange} type="text" id="form4Example2" name="author" className="form-control" />
                        <label className="form-label" for="form4Example2">Author</label>
                    </div>

                    
                    <div className="form-outline mb-4">
                        <textarea  onChange={onchange}  className="form-control" name="descp" id="form4Example3" rows="4"></textarea>
                        <label className="form-label" for="form4Example3">description</label>
                    </div>

                    
                    

                    
                    <button  type="submit" className="btn btn-primary btn-block mb-4">Send</button>
        </form>
    </div>;
}



export default Addnote;