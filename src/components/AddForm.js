import React, { useState } from 'react'


const AddForm = ({dispatch}) => {

   
    const [id,setId]=useState(0);
    const [text,setText]=useState("");
    const [statu,setStatu]=useState("todo");

    const addNote=()=>{

        if(text!=""){
          dispatch({
            type:"ADD_NOTE",
            id,
            text,
            statu

          })
          setId(id+1);
          setText("");
        }

    }

  return (
    
    <div className='input-field'>
      
        <input type='text' value={text} placeholder='Add a Note' onChange={(e)=>setText(e.target.value)}></input>
        <button className='add-btn' onClick={addNote}>Add</button>
        
    </div>
    
  )
}

export default AddForm
