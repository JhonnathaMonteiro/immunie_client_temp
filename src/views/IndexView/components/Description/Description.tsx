import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import { withTranslation } from 'i18n';

const useStyles = makeStyles(theme => ({
  image: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: 600,
    },
  },
  title: {
    color: theme.palette.primary.light,
    fontSize: 42,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  boldText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  normalText: {
    fontSize: 24,
  },
  centeredTextBlock: {
    textAlign: 'center',
    maxWidth: 1044,
    marginTop: 20,
    marginBottom: 20,
  },
  learnMoreBtn: {
    backgroundColor: theme.palette.primary.light,
    borderRadius: "5rem",
    color: "#FFF",
    paddingLeft: 20,
    paddingRight: 20,
    fontWeight: "bold",
    marginTop: 20,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
      color: '#FFF'
  }
  },
  centerContainer: {
    display: "flex",
    justifyContent: "center",
  }
}));

const Description = ({ className, t, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <Typography variant="h1" className={classes.title}>
        {t('DESCRIPTION_TITLE')}
      </Typography>
      <div className={classes.centeredTextBlock}>
        <span className={classes.boldText}>{t('DESCRIPTION_TEXT_1_1_BOLD')} </span>
        <span className={classes.normalText}>{t('DESCRIPTION_TEXT_1_1_NORMAL')}</span>
      </div>
      <div className={classes.centeredTextBlock}>
        <span className={classes.normalText}>{t('DESCRIPTION_TEXT_2_1_NORMAL')} </span>
        <span className={classes.boldText}>{t('DESCRIPTION_TEXT_2_1_BOLD')}</span>
        <span className={classes.normalText}>{t('DESCRIPTION_TEXT_2_2_NORMAL')}</span>
        <span className={classes.boldText}>{t('DESCRIPTION_TEXT_2_2_BOLD')}</span>
      </div>
      <div className={classes.centerContainer}>
        <Button className={classes.learnMoreBtn}>
          {t('DESCRIPTION_LEARN_MORE_BTN')}
        </Button>

      </div>
    </div>
  );
};

export default withTranslation('indexPage')(Description);
