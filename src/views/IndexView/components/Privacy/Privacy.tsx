import React from 'react';
import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { withTranslation } from 'i18n';

const useStyles = makeStyles(theme => ({
  title: {
    color: theme.palette.secondary.main,
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 800,
  },
  learnMoreBtn: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '5rem',
    color: '#FFF',
    paddingLeft: 30,
    paddingRight: 30,
    fontWeight: 'bold',
    marginTop: 40,
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      color: '#FFF',
    },
  },
  centerContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  bottomImage: {
    backgroundImage: "url(/static/images/illustrations/hex_group_2.svg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: 'right',
    backgroundPositionY: 2,
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: -40
  },
  topImage: {
    width: 400,
    marginTop: -120,
    marginLeft: -100

  }
}));

const Privacy = ({ className, t, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <div className={classes.topImage}>
          <Image height={300} width={600} src="/static/images/illustrations/hex_group_1.svg"/>
      </div>
      <Typography className={classes.title}>{t('PRIVACY_TITLE')}</Typography>

      <div className={classes.centerContainer}>
        <Button className={classes.learnMoreBtn}>{t('PRIVACY_LEARN_MORE_BTN')}</Button>

      </div>
      <div className={classes.bottomImage}>
          <Image height={403} width={532} src="/static/images/photos/health_mockup_2.png"/>
      </div>
    </div>
  );
};

export default withTranslation('indexPage')(Privacy);
