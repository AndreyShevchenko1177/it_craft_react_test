import { makeStyles } from "@material-ui/core";

const colors = {
  'primary': '#324851',
  'secondary': '#86ac41',
  'system': '#34675c',
  'background': '#b3c7c6',
}


export default makeStyles((theme) => ({
  dashBoard:{
    borderBottom: colors.primary,
    padding: '10px',

  },

  notes:{
    // border: '1px solid red',
    display: 'grid',
    gridTemplateColumns: "minmax(150px, 300px) minmax(300px, 100%)",
    gridColumnGap: "5px",
    height: 'calc(100% - 50px)',
  },

  notesListWrapper:{
    borderRight: '5px solid ' + colors.primary,
    padding: '0 0 10px 0px',
  },

  notesContent:{
    // border: '1px solid red',
    padding: '10px',
  },

  notesList:{
    // border: '1px solid red',
    padding: '0 10px 10px 10px',
  },
  notesContent:{
    // border: '1px solid red',
    padding: '10px',
  },

  buttonNew:{
    // border: '1px solid red',
    padding: '10px',
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.3)",
    display: 'flex',
    justifyContent: 'center',
  },

}))