import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Image from 'next/image';
import { CardBase } from 'components/organisms';
import { withTranslation } from 'i18n';

const useStyles = makeStyles(theme => ({
  mainTitle: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 600,
  },
  mainText: {
    textAlign: 'center',
    fontSize: 24,
  },
  centerdText: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20
  },
  centerdContainer: {
    maxWidth: 1044,
    margin: '20px auto',
  },
  cardSectionTitle: {
    marginTop: 40,
    textAlign: 'center',
    color: theme.palette.primary.light,
  },
  cardsContainer: {
    marginTop: 40,
    display: 'flex',
  },
  card: {
    margin: 10,
    minHeight: 300,
  },
}));

const HowItWorks = ({ className, t, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <Typography variant="h1" className={classes.mainTitle}>
        {t('HOW_IT_WORKS')}
      </Typography>
      <div className={classes.centerdContainer}>
        <Typography className={classes.mainText}>{t('HOW_IT_WORKS_MAIN_TEXT')}</Typography>
      </div>
      <Typography variant="h4" className={classes.cardSectionTitle}>
        {t('HOW_IT_WORKS_CARD_SECTION_TITLE')}:
      </Typography>
      <div className={classes.cardsContainer}>
        <CardBase className={classes.card} withShadow liftUp>
          <>
            <Image width={60} height={60} src={'/static/images/icons/hands_heart.svg'} />
            <Typography variant="h6" className={classes.centerdText}>
              {t('HOW_IT_WORKS_CARD_1_TEXT')}
            </Typography>
          </>
        </CardBase>
        <CardBase className={classes.card} withShadow liftUp>
          <>
            <Image width={60} height={60} src={'/static/images/icons/globe.svg'} />
            <Typography variant="h6" className={classes.centerdText}>
              {t('HOW_IT_WORKS_CARD_2_TEXT')}
            </Typography>
          </>
        </CardBase>
        <CardBase className={classes.card} withShadow liftUp>
          <>
            <Image width={60} height={60} src={'/static/images/icons/green_shield.svg'} />
            <Typography variant="h6" className={classes.centerdText}>
              {t('HOW_IT_WORKS_CARD_3_TEXT')}
            </Typography>
          </>
        </CardBase>
      </div>
    </div>
  );
};

export default withTranslation('indexPage')(HowItWorks);
