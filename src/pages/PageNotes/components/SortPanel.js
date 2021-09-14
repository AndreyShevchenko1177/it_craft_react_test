import NavigationOutlinedIcon from '@material-ui/icons/NavigationOutlined';
import {useEffect, useState} from 'react';
import useStyles from '../pageNotesStyle';
import clsx from "clsx";



const SortPanel = function ({titleDirection, setTleDirection, dateDirection, setDateDirection}) {
  const classes = useStyles();

  const changeDirection = (stateHandler) => {
    stateHandler((prev) => (prev + 2) % 3 - 1);
  };

  return <>
    <div className={classes.sortPanelWrapper} >
      <div className={classes.icon} onClick={() => changeDirection(setTleDirection)}>
        {'Title'}
        <NavigationOutlinedIcon classes={{
          root: clsx(classes.sortArrow,
            {[classes.downIcon]: (titleDirection === (-1))}, {[classes.transparentIcon]: !titleDirection})
        }} />
      </div>

      <div className={classes.icon} onClick={() => changeDirection(setDateDirection)}>
        {'Date'}
        <NavigationOutlinedIcon classes={{
          root: clsx(classes.sortArrow,
            {[classes.downIcon]: (dateDirection === (-1))}, {[classes.transparentIcon]: !dateDirection})
        }} />
      </div>
    </div>
  </>;
};

export default SortPanel;