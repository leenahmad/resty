import React from "react";
import './form.scss'

import { useState } from "react";





function Form (props){
    
    const [url , setUrl] = useState()
    const [method , setMethod] = useState('GET')
    const [body , setBody] = useState()

    const urlClicker = (e) =>{
       e.preventDefault();
       const Data = {
           url: url,
           method: method,
           body: null,

       }
       if(body){
           Data.body = body      
         }else{

          props.handleApiCall(Data);
        }
    }

    const  handleUrl = (e)=> {
        e.preventDefault();
        setUrl(e.target.value);
    }

    const  changeMethod = (e) => {
        e.preventDefault();
        
            setMethod(e.target.value) ;
       
    }

    const handlebody = (e) => {
        e.preventDefault();
        setBody(e.target.value)

    }

   
     return (
    <>
     
      <form onSubmit={urlClicker}>
      <div>
      <label>
      <input name='url' type='text' onChange={handleUrl} />
       
       </label>
       <button type="button"  onClick={urlClicker} >GO!</button>
       <div id="buttons">

       
          <input type="button" className="button1"  value="GET" onClick={changeMethod} />
            
          <input className="button2" type="button" value="POST"  onClick={changeMethod}/>
          <input className="button3"  type="button" value="PUT"  onClick={changeMethod}/>
          <input className="button4" type="button" value="DELETE" onClick={changeMethod}/>
          <input className="button5"  type="button" value="PATCH"  onClick={changeMethod}/>
          </div>
       
        
        <div>
            <div>
              <label htmlFor="json">POST or PUT request</label>
              <textarea
                onChange={handlebody} type="textarea"  defaultValue="{}"  />
            </div>
            </div>
            </div>
        </form>
 
    </>
  );
}

export default Form;
