import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {Button, makeStyles} from '@material-ui/core';
import {connect} from 'react-redux';
import {actionLogOut, actionNewNote} from '../../Store/actions';
import {useHistory} from 'react-router-dom';
import {useEffect, useState} from 'react';
import useStyles from './pageNotesStyle'
import NotesListItem from './components/ListItem'
import NoteContent from './components/NoteContent';

const useStylesIcon = makeStyles((theme) => ({
    root: {
        cursor: 'pointer',
    },
}));


const PageNotes = function ({
    onLogout = () => {},
    currentUser,
    notes = [],
    onNewNote = () => {},
}) {
    const classesIcon = useStylesIcon();
    const classes = useStyles()
    const history = useHistory();
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleSelectedIndex = (i)=>{
        setSelectedIndex(i)
    }

    const isSelected =(i)=>(i===selectedIndex);

    useEffect(() => {
        if (!currentUser) {history.push('/login');}
    }, [currentUser]);




    return <>
        <div className='notesWrapper'>
            <div className={classes.dashBoard}>
                <ExitToAppIcon classes={{root: classesIcon.root}} onClick={() => {onLogout();}} />
            </div>
            <div className={classes.notes}>
                <div className={classes.notesListWrapper}>
                    <div className={classes.buttonNew}>
                        <Button variant="contained" onClick={() => {onNewNote(); setSelectedIndex(0);}}>
                            {'New note'}
                        </Button>
                    </div>
                    <div className={classes.notesList}>
                        {notes.map((noteItem, i) => <NotesListItem
                            key={noteItem.id}
                            noteItemTitle={noteItem.title}
                            indexNumber={i}
                            selected={isSelected(i)}
                            handleSelectedIndex={handleSelectedIndex}
                        />)}
                    </div>
                </div>
                <div className={classes.notesContent}>
                <NoteContent note={notes[selectedIndex]}/>
            </div>

            </div>

        </div>

    </>;
};

const CPageNotes = connect((s) => (
    {
        currentUser: s?.currentUser,
        notes: s?.notes
    }),
    {
        onLogout: actionLogOut,
        onNewNote: actionNewNote,
    })(PageNotes);

export default CPageNotes;