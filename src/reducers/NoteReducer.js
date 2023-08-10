

const NotesReducer=(state,action)=>{
    switch(action.type){
        case "SHOW_NOTES":
            return action.notes;
        
        case "ADD_NOTE":
            return [
                ...state,
                {id:action.id,text:action.text,statu:action.statu}
            ]
          
        case "REMOVE_NOTE":
            return state.filter(note=>note.id!==action.id);

        case "REMOVE_ALL":
             
            return state.filter(note=>note.statu!==action.statu);

        case "EDIT_STATU_NEXT":
            return state.map((note)=>{
    
                if(note.id===action.id && note.statu=="todo"){
                    return{
                        ...note,
                        statu: "beingdone"
                    }
                }else if(note.id===action.id && note.statu=="beingdone"){
                    return{
                        ...note,
                        statu: "done"
                    }
                }else{
                    return note
                }
            })   
        
        case "EDIT_STATU_PREV":
            return state.map((note)=>{
        
                if(note.id===action.id && note.statu=="done"){
                    return{
                        ...note,
                        statu: "beingdone"
                    }
                }else if(note.id===action.id && note.statu=="beingdone"){
                    return{
                        ...note,
                        statu: "todo"
                    }
                }else{
                    return note
                }
            })      
                      
              
         
        default:
            return state;    
             

    }
}
export default NotesReducer