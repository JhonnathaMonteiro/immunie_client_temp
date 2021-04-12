import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image';
import { Button, Typography, ListItemAvatar, Avatar, Grid, ListItem } from '@material-ui/core';
import { withTranslation } from 'i18n';

import { languagesData } from './data';

const useStyles = makeStyles(theme => ({
  mainTitle: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 600,
    color: theme.palette.text.secondary,
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
    justifyContent: 'center',
  },
  imageContainer: {
    position: 'absolute',
    left: 0,
    top: 40,
    width: 200,
    [theme.breakpoints.down('md')]: {
      width: 70,
      top: 0,
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
  },
  learnMoreBtn: {
    backgroundColor: theme.palette.text.secondary,
    borderRadius: '5rem',
    color: '#FFF',
    paddingLeft: 20,
    paddingRight: 20,
    fontWeight: 'bold',
    marginTop: 20,
    '&:hover': {
      backgroundColor: theme.palette.text.secondary,
      color: '#FFF',
    },
  },
  btnContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: -60,
  },
  subtitle: {
    fontStyle: 'italic',
    fontWeight: 600,
    fontSize: 20,
    color: theme.palette.text.secondary,
    textAlign: 'center',
    marginTop: 40,
  },
  listItemAvatar: {
    alignSelf: 'flex-start',
  },
  checkBox: {
    background: 'transparent',
    borderRadius: 0,
    width: 30,
    height: 30,
  },
  languageItem: {
    fontWeight: 'bold',
    fontSize: 20
  },
  languagesGrid: {
    width: "70%",
    margin: '0 auto',
    marginTop: 40,
    // marginRight:
  }
}));

const Languages = ({ className, t, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <div className={classes.mainContainer}>
        <div className={classes.imageContainer}>
          <Image width={240} height={240} src="/static/images/icons/hex_earth.svg" />
        </div>
        <div>
          <div className={classes.textWrapper}>
            <Typography variant="h1" className={classes.mainTitle}>
              {t('LANGUAGES')}
            </Typography>
          </div>
          <div className={classes.textWrapper}>
            <Typography variant="h6" className={classes.mainText}>
              {t('LANGUAGES_MAIN_TEXT_1')}
            </Typography>
          </div>
          <div className={classes.textWrapper}>
            <Typography variant="h6" className={classes.mainText}>
              {t('LANGUAGES_MAIN_TEXT_2')}
            </Typography>
          </div>
        </div>
      </div>
      <div className={classes.btnContainer}>
        <Button className={classes.learnMoreBtn}>{t('LANGUAGES_CONTACT_US')}</Button>
      </div>
      <Typography variant="h5" className={classes.subtitle}>
        {t('LANGUAGES_LIST_TITLE')}:
      </Typography>
      <Grid container spacing={0} className={classes.languagesGrid}>
        {languagesData.map((item, index) => (
          <Grid item container md={4} sm={6} key={index} data-aos="fade-up" alignItems="center" justify="center">
            <ListItem >
              <ListItemAvatar className={classes.listItemAvatar}>
                <Avatar src="/static/images/icons/list_item_icon.svg" className={classes.checkBox} />
              </ListItemAvatar>
              <Typography variant="subtitle1" color="textPrimary" className={classes.languageItem}>
                {t(item)}
              </Typography>
            </ListItem>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default withTranslation('indexPage')(Languages);
