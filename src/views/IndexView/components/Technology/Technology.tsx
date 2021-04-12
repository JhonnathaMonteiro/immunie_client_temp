import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image';
import { Button, Typography } from '@material-ui/core';
import { withTranslation } from 'i18n';

const useStyles = makeStyles(theme => ({
  mainTitle: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 800,
    color: theme.palette.primary.dark,
  },
  mainText: {
    textAlign: 'center',
    fontSize: 24,
  },
  textWrapper: {
    maxWidth: 700,
    margin: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 20,
    // marginLeft: '-5rem',
  },
  mainContainer: {
    position: 'relative',
    display: 'flex',
    marginBottom: 60,
    justifyContent: 'center'
  },
  imageContainer: {
    position: 'absolute',
    left: 40,
    top: 70,
    width: 160,
    [theme.breakpoints.down('md')]: {
      width: 70,
      top: 0,
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
  },
  learnMoreBtn: {
    borderRadius: '5rem',
    color: theme.palette.primary.dark,
    paddingLeft: 20,
    paddingRight: 20,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 24,
    border: `2px solid ${theme.palette.primary.dark}`,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      color: '#FFF',
    },
  },
  btnContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: -60,
  },
}));

const Technology = ({ className, t, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <div className={classes.mainContainer}>
        <div className={classes.imageContainer}>
          <Image width={240} height={240} src="/static/images/icons/shield.svg" />
        </div>
        <div>
          <div className={classes.textWrapper}>
            <Typography variant="h1" className={classes.mainTitle}>
              {t('TECHNOLOGY')}
            </Typography>
          </div>
          <div className={classes.textWrapper}>
            <Typography variant="h6" className={classes.mainText}>
              {t('TECHNOLOGY_MAIN_TEXT')}
            </Typography>
          </div>
        </div>
      </div>
      <div className={classes.btnContainer}>
        <Button className={classes.learnMoreBtn}>{t('TECHNOLOGY_LEARN_MORE')}</Button>
      </div>
    </div>
  );
};

export default withTranslation('indexPage')(Technology);
