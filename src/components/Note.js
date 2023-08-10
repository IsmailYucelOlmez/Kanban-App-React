import React from 'react'

const Note = ({note,dispatch}) => {

  const changeStatuNext=(id)=>{
    dispatch({
      type:"EDIT_STATU_NEXT",
      id

    })
    
  }
  
  const changeStatuPrev=(id)=>{
    dispatch({
      type:"EDIT_STATU_PREV",
      id

    })
  }

  
  const removeNote=(id)=>{
    dispatch({
      type:"REMOVE_NOTE",
      id
    })
   }

  return (
    <div className='note-text'>
      <p>{note.text}</p>
      <div className='icons-field'>
        {(note.statu=="beingdone" || note.statu=="done")&&
          <i onClick={()=>changeStatuPrev(note.id)} className="fa-solid fa-arrow-left"></i>  
        }
        {(note.statu=="todo" || note.statu=="beingdone")&&
          <i onClick={()=>changeStatuNext(note.id)} className="fa-solid fa-arrow-right"></i>
        }
        
        <i onClick={()=>removeNote(note.id)} className="fa-solid fa-trash"></i>
      </div>
    </div>

  )
}

export default Note
