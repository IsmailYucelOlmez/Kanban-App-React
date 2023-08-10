import React, { useState } from 'react'
import Note from './Note'

const NoteList = ({notes,dispatch,statuText}) => {

  const removeAll=(statu)=>{
    dispatch({
      type:"REMOVE_ALL",
      statu
    })
  }
  
    
  return (
    <div className='note-field'>
      {notes &&(
        notes.map((note,index)=>(

             <Note note={note} key={index} dispatch={dispatch}/>
        ))
      )}
      <div className='remove-all-field'>
        <button onClick={()=>removeAll(statuText)}>Remove All</button>
      </div>
    </div>
  )
}

export default NoteList
