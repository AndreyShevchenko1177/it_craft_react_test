import {Button, TextField} from "@material-ui/core";
import {useEffect, useState} from "react";
import {connect} from "react-redux";
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {actionNewUser, actionLogin} from '../Store/actions'
import {useHistory} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: 120,
    width: 300,
    //   marginBottom: '50px',
  },

  selectEmpty: {
    marginTop: theme.spacing(2),
  },

  button: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(10),
  },
}));


const PageLogin = function ({userList = [], onCreate=()=>{}, onSelect=()=>{}, currentUser}) {
  const history = useHistory();

  if(!!currentUser){history.push('/notes')}

  const classes = useStyles();
  const [user, setUser] = useState('');
  const [newUser, setNewUser] = useState('');

  const handleChange = (event) => {
    setUser(event.target.value);
  };

  const isUserExists = () => {
    return !!(userList.find(el => el === newUser));
  };

  const isNewUserValid = () => {
    if (!newUser || !newUser.trim()) {return false;}
    return !(isUserExists());
  }



  return <>
    <div className='loginWrapper'>
      <h2>{'Select user account:'}</h2>


      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">
          {userList.length
            ? 'Select user'
            : 'No user exist yet'
          }
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={user}
          onChange={handleChange}
          inputProps={{disabled: (!userList.length)}}
        >

          {userList.map((item, i) => <MenuItem key={i} value={item}>{item}</MenuItem>)}
        </Select>
      </FormControl>
      <Button
        className={classes.button}
        variant="contained"
        disabled={(!userList.length || !user)}
        onClick={()=>{onSelect(user)}}
      >
        {'Select'}
      </Button>


      <h2>{'Or input new username:'}</h2>

      <TextField
        error={!!newUser && !isNewUserValid()}
        label={"New user"}
        value={newUser}
        onChange={(e) => {setNewUser(e.target.value);}}
        helperText={(!!newUser && !isNewUserValid() ? 'Such user exists' : ' ')}
        />
      <Button
        className={classes.button}
        variant="contained"
        disabled={!isNewUserValid()}
        onClick={()=>{onCreate(newUser)}}
      >
        {'Create'}
      </Button>
    </div>

  </>;
};

const CPageLogin = connect((s) => ({
    userList: s?.userList,
    currentUser: s?.currentUser,
  }),
  {
  onCreate: actionNewUser,
  onSelect: actionLogin,
  })(PageLogin);

export default CPageLogin;