import { makeStyles } from "@material-ui/core";

const colors = {
  'primary': '#324851',
  'secondary': '#86ac41',
  'system': '#34675c',
  'background': '#b3c7c6',
}


export default makeStyles((theme) => ({

  dashBoard:{
    display: 'grid',
    justifyItems: 'center',
    alignItems: 'center',
    gridTemplateColumns: "8fr 10fr 200px 20px 20px",
    gridColumnGap: "20px",
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
    padding: '20px 10px 10px 10px',
  },

  buttonNew:{
    // border: '1px solid red',
    padding: '10px',
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.3)",
    display: 'flex',
    justifyContent: 'center',
    height: '35px',
  },

  noteContentWrapper:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
  },

  contentTitle: {
    marginBottom: '10px',
    '& input': {
      color: 'var(--primary)',
      fontFamily: 'Pangolin',
      fontWeight: '500',
    }
  },

  description: {
    // marginBottom: '10px',
    maxHeight: '300px',
    '& textarea': {
      color: 'var(--primary)',
      fontFamily: 'Pangolin',
      fontWeight: '500',
    }
  },

  dateLabel: {
    position: 'absolute',
    top: '320px',
    right: '0px',
    fontWeight: '300',
    fontSize: '0.9em',

  },

  titleAndIcon: {
    display:'grid',
    gridTemplateColumns: "1fr 40px",
    width: '100%',
    justifyItems: 'right',
  },

  sortPanelWrapper: {
    display:'grid',
    gridTemplateColumns: "1fr 1fr",
    justifyItems: 'center',
    width: '100%',
    '&>div':{
      display: 'flex',
      alignItems: 'center',
    }
  },

  icon: {
    cursor: 'pointer',
  },

  searchIcon: {
    color: 'var(--system)'
  },


  sortArrow: {
    transition: "all 0.5s",

  },

  transparentIcon: {
    opacity: '0.1',
    transition: "all 0.5s",

  },

  downIcon: {
    transform: "rotate(-180deg)",
    transition: "all 0.5s",

  },

}))