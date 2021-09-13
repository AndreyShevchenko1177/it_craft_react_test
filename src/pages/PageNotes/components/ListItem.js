import useStyles from './listItemStyle'
import ListItem from '@material-ui/core/ListItem';
import {ListItemText} from '@material-ui/core';



const NotesListItem = function ({noteItemTitle='', indexNumber, handleSelectedIndex, selected}){
  const classes = useStyles()

  return <>
    <div className={classes.noteItemWrapper}>
      <ListItem
        classes={{root: classes.listItemRoot,}}
          button
          divider={true}
          selected={selected}
          // selected={selectedIndex === 0}
          onClick={(event) => handleSelectedIndex(indexNumber)}
        >
        <ListItemText
          disableTypography={true}
          classes={{
            root: classes.listItemTextRoot,
          }}
          primary={noteItemTitle} />
        </ListItem>
    </div>
  </>
}

export default NotesListItem