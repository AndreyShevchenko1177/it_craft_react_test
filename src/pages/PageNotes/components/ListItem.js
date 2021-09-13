import useStyles from './listItemStyle'
import ListItem from '@material-ui/core/ListItem';
import {ListItemText} from '@material-ui/core';



const NotesListItem = function ({noteItemTitle=''}){
  const classes = useStyles()

  return <>
    <div className={classes.noteItemWrapper}>
      <ListItem
        classes={{root: classes.listItemRoot,}}
          button
          divider={true}
          // selected={true}
          // selected={selectedIndex === 0}
          // onClick={(event) => handleListItemClick(event, 0)}
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