import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {makeStyles} from '@material-ui/core';
import {connect} from 'react-redux';
import {actionLogOut} from '../Store/actions';
import {useHistory} from 'react-router-dom';
import {useEffect} from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        cursor: 'pointer',
    },
}));

const PageNotes = function ({onLogout = () => {}, currentUser}) {
    const classes = useStyles();
    const history = useHistory();

    useEffect(() => {
        if (!currentUser) {history.push('/login');}
    }, [currentUser]);



    return <>
        <div className='notesWrapper'>
            {'PageNotes'}
            <ExitToAppIcon classes={{root: classes.root}} onClick={() => {onLogout();}} />
        </div>

    </>;
};

const CPageNotes = connect((s) => ({currentUser: s?.currentUser}), {onLogout: actionLogOut})(PageNotes);

export default CPageNotes;