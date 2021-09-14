import {InputAdornment, TextField} from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import useStyles from '../pageNotesStyle'


const SearchField = function ({searchString, setSearchString}) {
  const classes = useStyles()

  return <>
    <TextField
      placeholder={'Search by title'}
      value={searchString}
      onChange={(e) => setSearchString(e.target.value)}
      size={'small'}
      className={classes.margin}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchOutlinedIcon classes={{root: classes.searchIcon}} />
          </InputAdornment>
        ),
      }}
    />
  </>;
}

export default SearchField