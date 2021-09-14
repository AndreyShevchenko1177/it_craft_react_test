import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import {Button, InputAdornment, makeStyles, TextField} from '@material-ui/core';
import {connect} from 'react-redux';
import {actionLogOut, actionNewNote} from '../../Store/actions';
import {useHistory} from 'react-router-dom';
import {useEffect, useState} from 'react';
import useStyles from './pageNotesStyle';
import NotesListItem from './components/ListItem';
import NoteContent from './components/NoteContent';
import SearchField from './components/SearchField';
import SortPanel from './components/SortPanel';


const PageNotes = function ({
    onLogout = () => {},
    currentUser,
    notes = [],
    onNewNote = () => {},
}) {
    const classes = useStyles();
    const history = useHistory();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [searchString, setSearchString] = useState('');
    const [sortedNotes, setSortedNotes] = useState([]);
    const [filteredNotes, setFilteredNotes] = useState([]);
    const [titleDirection, setTleDirection] = useState(0)
    const [dateDirection, setDateDirection] = useState(0)

    const handleSelectedIndex = (i) => {setSelectedIndex(i)};

    const isSelected = (i) => (i === selectedIndex);

    useEffect(() => {
        if (!currentUser) {history.push('/login');}
    }, [currentUser]);

    useEffect(() => {
        setFilteredNotes(sortedNotes.filter((el) => el.title.toLowerCase().includes(searchString.toLowerCase())));
    }, [searchString, sortedNotes]);

    useEffect(()=>{
        setSortedNotes([...notes]
            .sort((a,b)=>(a.title>b.title ? 1 : -1)*titleDirection)
            .sort((a,b)=>(a.date>b.date ? 1 : -1)*dateDirection))
    },[titleDirection, dateDirection, notes])

    return <>
        <div className='notesWrapper'>
            <div className={classes.dashBoard}>
                <SortPanel
                    titleDirection={titleDirection}
                    setTleDirection={setTleDirection}
                    dateDirection={dateDirection}
                    setDateDirection={setDateDirection}
                />
                <SearchField searchString={searchString} setSearchString={setSearchString} />
                <span>{`User: ${currentUser}`}</span>
                <HelpOutlineOutlinedIcon classes={{root: classes.icon}} onClick={() => {history.push('/about')}} />
                <ExitToAppIcon classes={{root: classes.icon}} onClick={() => {onLogout();}} />
            </div>

            <div className={classes.notes}>
                <div className={classes.notesListWrapper}>
                    <div className={classes.buttonNew}>
                        <Button variant="contained" onClick={() => {onNewNote(); setSelectedIndex(0);}}>
                            {'New note'}
                        </Button>
                    </div>
                    <div className={classes.notesList}>
                        {filteredNotes.map((noteItem, i) => <NotesListItem
                            key={noteItem.id}
                            noteItemTitle={noteItem.title}
                            indexNumber={i}
                            selected={isSelected(i)}
                            handleSelectedIndex={handleSelectedIndex}
                        />)}
                    </div>
                </div>
                <div className={classes.notesContent}>
                    <NoteContent note={filteredNotes[selectedIndex]} />
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