import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {Button, makeStyles} from '@material-ui/core';
import {connect} from 'react-redux';
import {actionLogOut} from '../../Store/actions';
import {useHistory} from 'react-router-dom';
import {useEffect} from 'react';
import useStyles from './pageNotesStyle'

const useStylesIcon = makeStyles((theme) => ({
    root: {
        cursor: 'pointer',
    },
}));

const PageNotes = function ({onLogout = () => {}, currentUser}) {
    const classesIcon = useStylesIcon();
    const classes = useStyles()
    const history = useHistory();

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
                    <Button variant="contained">{'New note'}</Button>
                </div>
                <div className={classes.notesList}>
                    {"LIST"}
                </div>
            </div>
            <div className={classes.notesContent}>
                {"CONTENT"}
            </div>

            </div>

        </div>

    </>;
};

const CPageNotes = connect((s) => ({currentUser: s?.currentUser}), {onLogout: actionLogOut})(PageNotes);

export default CPageNotes;