import {makeStyles} from "@material-ui/core";

const colors = {
  'primary': '#324851',
  'secondary': '#86ac41',
  'system': '#34675c',
  'background': '#b3c7c6',
};


export default makeStyles((theme) => ({

  noteItemWrapper: {
    // border: '1px solid red',
    // margin: '10px 5px',
  },

  listItemRoot: {
    borderRadius: '5px',

  },

  listItemTextRoot: {
    fontFamily: 'Pangolin',
    fontWeight: '600',
    // fontSize: '1.2em',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }
}));