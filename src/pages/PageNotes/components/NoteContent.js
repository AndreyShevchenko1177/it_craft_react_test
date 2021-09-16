import {Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import moment from "moment";
import {useEffect, useState} from "react";
import useStyles from '../pageNotesStyle';
import {actionSaveNote, actionDeleteNote} from '../../../Store/actions';
import {connect} from 'react-redux';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

const NoteContent = function ({note: {id, date, title = '', msg = ''} = {}, onSaveNote, onDeleteNote}) {

  const classes = useStyles();

  const [newTitle, setNewTitle] = useState(title);
  const [newMsg, setNewMsg] = useState(msg);

  useEffect(() => {
    setNewTitle(title);
    setNewMsg(msg);
  }, [id]);

  const isTitleValid = () => (newTitle.length >= 3 && newTitle.length <= 120);
  const isMsgValid = () => (newMsg.length >= 5 && newMsg.length <= 500);
  const isFormValid = () => isTitleValid() && isMsgValid();

  const handleSave = () => {
    let payload = {
      id,
      date,
      title: newTitle,
      msg: newMsg,
    };
    onSaveNote(payload);
  };

  return <>
    <div className={classes.noteContentWrapper}>
      {!!id
        ? <>
          <div className={classes.titleAndIcon}>
            <TextField
              id="outlined-error-helper-text"
              label="Title"
              value={newTitle}
              // defaultValue={'Title'}
              variant="outlined"
              fullWidth={true}
              onChange={(e) => {setNewTitle(e.target.value);}}
              classes={{root: classes.contentTitle}}
              error={!isTitleValid()}
              helperText={isTitleValid() ? ' ' : 'From 3 to 150 chars'}
            />
            <DeleteForeverOutlinedIcon classes={{root: classes.icon}} onClick={() => {onDeleteNote(id);}} />
          </div>

          <TextField
            id="outlined-error-helper-text"
            label="Description"
            value={newMsg}
            // defaultValue={'Description'}
            variant="outlined"
            fullWidth={true}
            onChange={(e) => {setNewMsg(e.target.value);}}
            classes={{root: classes.description}}
            rows={10}
            multiline
            error={!isMsgValid()}
            helperText={isMsgValid() ? ' ' : 'From 5 to 500 chars'}
          />

          <Button variant="contained" onClick={() => {handleSave();}} disabled={!isFormValid()}>
            {'Save'}
          </Button>
          <div className={classes.dateLabel}>{!!date ? moment(date).format("YYYY/MM/DD - HH:mm:ss") : ''}</div>
        </>
        : <h2>{'Select any record'}</h2>}
    </div>
  </>;
};

const CNoteContent = connect(null, {onSaveNote: actionSaveNote, onDeleteNote: actionDeleteNote})(NoteContent);

export default CNoteContent;