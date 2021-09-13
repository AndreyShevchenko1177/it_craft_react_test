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
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.3)",
  },

  notes:{
    // border: '1px solid red',
    display: 'grid',
    gridTemplateColumns: "minmax(310px, 500px) minmax(340px, 100%)",
    gridTemplateRows: '1fr',
    gridColumnGap: "5px",
    height: 'calc(100% - 49px)',
  },

  notesListWrapper:{
    borderRight: '2px solid ' + colors.system,
    padding: '0 0 10px 0px',
    boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.3)",
    position: 'relative',
  },

  notesContent:{
    // border: '1px solid red',
    padding: '10px',
  },

  notesList: {
    // border: '1px solid red',
    padding: '0 10px 10px 10px',
    overflow: 'auto',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 55,
    bottom: 0,
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
    height: '35px',
  },

}))