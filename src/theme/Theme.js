import {createGlobalStyle} from 'styled-components'

const darkTheme={

    bodyBackground:"#4a4e69",
    headerBackground:"#023e8a",
    titleFieldColor:"#fff",
    notesSectionBorderColor:"#fff",
    notesFieldBorderColor:"#fff",
    noteTextColor:"#fff",
  
}

const lightTheme={

    bodyBackground:"#fff",
    headerColor:"#fff",
    titleFieldColor:"black",
    notesSectionBorderColor:"black",
    notesFieldBorderColor:"black",
    noteTextColor:"black",

}

const GlobalStyles=createGlobalStyle`

  body{
    background-color:${(props)=>props.theme.bodyBackground}
  }
  header{
    background-color:${(props)=>props.theme.headerBackground}
  }
  .title-field{
    color:${(props)=>props.theme.titleFieldColor}
  }
  .notes-section{
    border-color:${(props)=>props.theme.notesSectionBorderColor}
  }
  .note-field{
    border-color:${(props)=>props.theme.notesFieldBorderColor}
  }
  .note-text{
    color:${(props)=>props.theme.noteTextColor}
  }

`;

export {GlobalStyles,lightTheme,darkTheme};