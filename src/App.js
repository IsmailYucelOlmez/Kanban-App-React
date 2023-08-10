import './App.css';
import { useReducer,useState,useEffect } from 'react';
import NotesReducer from './reducers/NoteReducer'
import NoteList from './components/NoteList'
import AddForm from './components/AddForm';
import { ThemeProvider } from 'styled-components';
import {lightTheme,darkTheme,GlobalStyles} from './theme/Theme';

function App() {

  const [notes,dispatch]=useReducer(NotesReducer,[]);

  const savedTheme =localStorage.getItem('theme') != null ? localStorage.getItem('theme') : 'dark';

  const [theme,setTheme]=useState(savedTheme);

  const themeToggle=()=>{
    theme=="light" ? setTheme("dark"): setTheme("light");
    document.querySelector("#theme-icon").classList.toggle("fa-sun");
    document.querySelector("#theme-icon").classList.toggle("fa-moon");

  }
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme',theme);

  }, [theme]);
  
  useEffect(()=>{

    showNotes();
    
  },[])

  useEffect(()=>{

    localStorage.setItem('kanbannotes',JSON.stringify(notes));

  },[notes]);

  const showNotes=()=>{

  const noteData=JSON.parse(localStorage.getItem('kanbannotes'));
    
    dispatch({type:"SHOW_NOTES",notes:noteData})

  }

  const todoNotes=notes.filter((note)=>{

    if(note.statu==="todo"){
      return true;
    }
  })

  const beingdoneNotes=notes.filter((note)=>{

    if(note.statu==="beingdone"){
      return true;
    }
  })

  const doneNotes=notes.filter((note)=>{

    if(note.statu==="done"){
      return true;
    }
  })
  



  return (
    
    <ThemeProvider theme={theme=="dark" ? darkTheme:lightTheme}>
      <GlobalStyles />

    <div className="App">
      
      <header className="App-header">
        <h1>Kanban App</h1>
      </header>
       
      <button onClick={themeToggle} className='theme-btn'>

          <i id='theme-icon' className={`fa-solid ${theme=="dark" ?'fa-moon':'fa-sun'} `}></i>      
      </button>

      <main>

        <AddForm dispatch={dispatch}/>

        <div className='title-field'>
            <h3>To Do</h3>
            <h3>Being Done</h3>
            <h3>Done</h3>
        </div>

        <div className='notes-section'>
          
        <NoteList notes={todoNotes} dispatch={dispatch} statuText={"todo"}/>
        <NoteList notes={beingdoneNotes} dispatch={dispatch} statuText={"beingdone"}/>
        <NoteList notes={doneNotes} dispatch={dispatch} statuText={"done"}/>

        </div>

      </main>
    
    </div>
    </ThemeProvider>
  );
}

export default App;
