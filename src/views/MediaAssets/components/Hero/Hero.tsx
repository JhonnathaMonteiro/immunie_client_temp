import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, colors } from '@material-ui/core';
import { withTranslation } from 'i18n';

const useStyles = makeStyles(() => ({
  textWhite: {
    color: 'white',
  },
  title: {
    fontWeight: 'bold',
    maxWidth: 1150,
    margin: '0 auto'
  },
  heroContainer: {
    background: colors.blue[900],
    padding: 20,
    marginTop: 0
  }
}));

const Hero = ({ className, t, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={className} {...rest} >
      <Grid container spacing={2} className={classes.heroContainer}>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            className={clsx(classes.textWhite, classes.title)}
          >
            {t('HERO_TITLE')}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default withTranslation('mediaAssetsPage')(Hero);
