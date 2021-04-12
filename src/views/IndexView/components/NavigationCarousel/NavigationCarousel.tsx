import React, { useState } from 'react';
import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';

import { withTranslation } from 'i18n';
import { Button, Typography, Paper } from '@material-ui/core';

import { navigationCarouselData } from './data';

const useStyles = makeStyles(theme => ({
  textWhite: {
    color: 'white',
    textTransform: 'uppercase',
  },
  root: {
    // width: '100%',
    minHeight: 600,
    backgroundImage: 'url(/static/images/photos/home_carousel_1.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'top',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '-4rem',
  },
  mainContent: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: 480,
  },
  textArea: {
    width: 440,
    marginTop: 20,
    marginLeft: -140,
  },
  navTitle: {
    fontWeight: 400,
    color: 'white',
    fontSize: 'xxx-large',
  },
  navText: {
    marginTop: '1rem',
    color: 'white',
  },
  button: {
    backgroundColor: theme.palette.primary.dark,
    borderRadius: '5rem',
    color: '#FFF',
    paddingLeft: 20,
    paddingRight: 20,
    fontWeight: 'bold',
    marginTop: 20,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
      color: '#FFF',
    },
  },

  buttonOutlined: {
    borderRadius: '5rem',
    color: 'white',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
    marginLeft: 20,
    fontWeight: 'bold',
    border: '2px solid rgba(255,255,255, 0.70)',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
      color: 'back',
    },
  },

  navigationArea: {
    marginBottom: 20,
    width: 400,
    height: 100,
    borderRadius: 60,
    backgroundColor: 'rgba(255,255,255,0.33)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  nav1: {
    width: 80,
    height: 80,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    // backgroundImage: 'url(/static/images/icons/bt-school.svg)',
    // '&:hover': {
    //   backgroundImage: 'url(/static/images/icons/bt-school-over.svg)',
    // },
  },
}));

const NavigationCarousel = ({ className, t }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className={classes.root}>
      <div className={classes.carouselContent}>
        <div className={classes.mainContent}>
          <div className={classes.textArea}>
            <Typography variant="h1" className={classes.navTitle}>
              {t(navigationCarouselData[currentIndex].title)}
            </Typography>
            <Typography variant="h5" className={classes.navText}>
              {t(navigationCarouselData[currentIndex].subtitle)}
            </Typography>

            <Button className={classes.button}>{t('NAVIGATION_CAROUSEL_SIGN_UP_BTN')}</Button>
            <Button variant="outlined" className={classes.buttonOutlined}>
              {t('NAVIGATION_CAROUSEL_LEARN_MORE_BTN')}
            </Button>
          </div>
          <Paper className={classes.navigationArea} elevation={0}>
            {navigationCarouselData.map((navItem, index) => (
              <div
                onClick={() => {
                  setCurrentIndex(index);
                }}
              >
                <NavButton key={navItem.activeImageUrl} item={navItem} isActive={currentIndex === index} />
              </div>
            ))}

            {/* <div>
              <Image height={80} width={80} src="/static/images/icons/bt-pro-over.svg" />
            </div>
            <div>
              <Image height={80} width={80} src="/static/images/icons/bt-entert-over.svg" />
            </div> */}
          </Paper>
        </div>
      </div>
    </div>
  );
};

const NavButton = ({ item, isActive }) => {
  const classes = useStyles();

  return (
    <div
      className={classes.nav1}
      style={{ backgroundImage: isActive ? item.activeImageUrl : item.inactiveImageUrl }}
    ></div>
  );
};

export default withTranslation('indexPage')(NavigationCarousel);
