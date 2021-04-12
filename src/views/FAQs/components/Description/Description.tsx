import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { withTranslation } from 'i18n';
import { CurveSvgCut } from 'components/atoms';
import Image from 'next/image';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    backgroundColor: '#F6F6F6',
    backgroundPosition: 'right',
    minHeight: 400,
    width: ' 100%',
    marginRight: 0,
    alignItems: 'center',
    position: 'relative',
  },
  title: {
    color: theme.palette.primary.dark,
    fontSize: 42,
    marginBottom: 20,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#8D8D8D',
    fontWeight: 500,
    fontSize: 32,
    marginLeft: 10,
  },
  normalText: {
    fontSize: 22,
  },
  descriptionTextContainer: {
    maxWidth: 700,
    marginLeft: 60,
    zIndex: 10,
  },
  titleContainer: {
    display: 'flex',
  },
  imageContainer: {
    position: 'absolute',
    top: 0,
    right: 80,
    zIndex:2
  }
}));

const Description = ({ className, t, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root} {...rest}>
      <div className={classes.descriptionTextContainer}>
        <div className={classes.titleContainer}>
          <Typography variant="h1" className={classes.title}>
            {t('USER_FAQ_TITLE')}
          </Typography>
          <Typography className={classes.subtitle}>{t('USER_FAQ_SUBTITLE')}</Typography>
        </div>
        <Typography className={classes.normalText}>{t('USER_FAQ_MAIN_DESCRIPTION')}</Typography>
      </div>
      <div className={classes.imageContainer}>
        <Image width={200} height={200} src="/static/images/illustrations/question_mark_baloon.svg" />

      </div>
      <CurveSvgCut position="bottomRight" color="white" />
    </div>
  );
};

export default withTranslation('faqsPage')(Description);
