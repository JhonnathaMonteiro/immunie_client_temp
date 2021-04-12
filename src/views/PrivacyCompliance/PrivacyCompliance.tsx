import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Description, Ico } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
}));

const PrivacyCompliance = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Description />
      <Ico />
    </div>
  );
};

export default PrivacyCompliance;
