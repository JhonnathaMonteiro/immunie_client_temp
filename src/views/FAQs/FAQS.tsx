import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Description, Questions } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
}));

const FAQS = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Description />
      <Questions />
    </div>
  );
};

export default FAQS;
