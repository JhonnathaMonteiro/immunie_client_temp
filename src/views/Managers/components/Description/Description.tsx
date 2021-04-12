import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { withTranslation } from 'i18n';

const useStyles = makeStyles(() => ({
  textWhite: {
    color: 'white',
  },
  title: {
    fontWeight: 'bold',
    color: "#ffc31f"
  },
}));

const Description = ({ className, t, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            className={clsx(classes.textWhite, classes.title)}
          >
            {t('DESCRIPTION_TITLE')}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" component="p" className={classes.textWhite}>
            {t('DESCRIPTION_SUBTITLE')}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default withTranslation('managersPage')(Description);
