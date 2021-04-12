import React from 'react';
import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import { withTranslation } from 'i18n';

const useStyles = makeStyles(theme => ({
  textWhite: {
    color: 'white',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  centeredTextBlock: {
    textAlign: 'center',
    maxWidth: 1044,
    marginTop: 40,
    marginBottom: 20,
  },
  descriptionText: {
    fontSize: 24,
  },
  cardGroups: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  cardWithShadown: {
    marginTop: 30,
    minHeight: 1000,
    minWidth: 500,
    backgroundColor: 'white',
    borderRadius: 17,
    boxShadow: '-8px -70px 80px rgba(0,0,0,0.08)',
  },
  cardContent: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: 30,
    paddingTop: 50,
    flexDirection: 'column',
    
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 24,
  },
  cardNormalText: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 24,
  },
  learnMoreBtn: {
    borderRadius: '5rem',
    color: '#478e1f',
    paddingLeft: 20,
    paddingRight: 20,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 24,
    border: '2px solid #478e1f',
    '&:hover': {
      backgroundColor: '#478e1f',
      color: '#FFF',
    },
  },
  textSemiBold: {
    fontStyle: 'italic',
    fontWeight: 700,
    fontSize: 20,
    marginBottom: 24,
  },
  flowContent1: {
    backgroundImage: 'url(/static/images/icons/minus_flow.svg)',
    height: 550,
    width: 320,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
  },
  flowContent2: {
    backgroundImage: 'url(/static/images/icons/plus_flow.svg)',
    height: 550,
    width: 300,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
  },
  leftText: {
    fontWeight: 600,
    fontSize: 12,
    textAlign: 'left',
    marginLeft: 12,
  },
  rightText: {
    fontWeight: 600,
    fontSize: 12,
    textAlign: 'right',
    marginLeft: 42,
  },
  textContainerLeft: {
    width: '100%',
    height: 70,
    display: 'flex',
    alignItems: 'center',
  },
  textContainerRight: {
    width: '100%',
    height: 70,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  textContainer: {
    width: 160,
    height: 70,
    display: 'flex',
    alignItems: 'center',
  },
  cardFooterText: {
    fontWeight: 'bold',
    color: '#478e1f',
    textAlign: 'center'
  },
}));

const Cards = ({ className, t, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <Typography variant="h1" className={classes.title}>
        {t('CARDS_SECTION_TITLE')}
      </Typography>
      <div className={classes.centeredTextBlock}>
        <Typography className={classes.descriptionText}>{t('CARDS_SECTION_DESCRIPTION')} </Typography>
      </div>
      <div className={classes.cardGroups}>
        <div className={classes.cardWithShadown}>
          <div className={classes.cardContent}>
            <Image width={60} height={60} src="/static/images/icons/documents.svg" />
            <Typography className={classes.cardTitle}>{t('CARDS_1_TITLE')}</Typography>
            <Typography className={classes.cardNormalText}>{t('CARDS_2_DESCRIPTION')}</Typography>
            <Typography className={classes.textSemiBold} style={{ marginTop: 82 }}>
              {t('CARDS_1_FLOW_TITLE')}:
            </Typography>
            <div className={classes.flowContent1}>
              <div className={classes.textContainerLeft}>
                <div className={classes.textContainer}>
                  <Typography className={classes.leftText}>{t('CARDS_1_FLOW_1_TEXT')}</Typography>
                </div>
              </div>
              <div className={classes.textContainerRight}>
                <div className={classes.textContainer}>
                  <Typography className={classes.leftText}                     style={{
                      marginLeft: 42,
                    }}>{t('CARDS_1_FLOW_2_TEXT')}</Typography>
                </div>
              </div>

              <div className={classes.textContainerLeft}>
                <div className={classes.textContainer}>
                  <Typography
                    className={classes.leftText}
                    style={{
                      marginRight: 10,
                      marginTop: 10,
                    }}
                  >
                    {t('CARDS_1_FLOW_3_TEXT')}
                  </Typography>
                </div>
              </div>
              <div className={classes.textContainerRight}>
                <div className={classes.textContainer}>
                  <Typography
                    className={classes.leftText}
                    style={{
                      marginLeft: 42,
                      marginTop: 20,
                    }}
                  >
                    {t('CARDS_1_FLOW_4_TEXT')}
                  </Typography>
                </div>
              </div>
              <div className={classes.textContainerLeft}>
                <div className={classes.textContainer}>
                  <Typography
                    className={classes.leftText}
                    style={{
                      marginTop: 28,
                      marginRight: 40,
                    }}
                  >
                    {t('CARDS_1_FLOW_5_TEXT')}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.cardWithShadown} style={{ marginLeft: -25 }}>
          <div className={classes.cardContent}>
            <Image width={60} height={60} src="/static/images/icons/phone_green.svg" />
            <Typography className={classes.cardTitle}>{t('CARDS_2_TITLE')}</Typography>
            <Typography className={classes.cardNormalText}>{t('CARDS_2_DESCRIPTION')}</Typography>
            <Button variant="outlined" className={classes.learnMoreBtn}>
              {t('CARDS_2_LEARN_MORE_BTN')}
            </Button>
            <Typography className={classes.textSemiBold}>{t('CARDS_2_FLOW_TITLE')}:</Typography>
            <div className={classes.flowContent2}>
              <div className={classes.textContainerLeft}>
                <div className={classes.textContainer}>
                  <Typography
                    className={classes.leftText}
                    style={{
                      marginRight: 40,
                    }}
                  >
                    {t('CARDS_2_FLOW_1_TEXT')}
                  </Typography>
                </div>
              </div>
              <div className={classes.textContainerRight}>
                <div className={classes.textContainer}>
                  <Typography
                    className={classes.leftText}
                    style={{
                      marginLeft: 50,
                    }}
                  >
                    {t('CARDS_2_FLOW_2_TEXT')}
                  </Typography>
                </div>
              </div>
              <div className={classes.textContainerLeft}>
                <div className={classes.textContainer}>
                  <Typography
                    className={classes.leftText}
                    style={{
                      marginRight: 30,
                      marginTop: 10,
                    }}
                  >
                    {t('CARDS_2_FLOW_3_TEXT')}
                  </Typography>
                </div>
              </div>
              <div className={classes.textContainerRight}>
                <div className={classes.textContainer}>
                  <Typography
                    className={classes.leftText}
                    style={{
                      marginLeft: 50,
                      marginTop: 10,
                    }}
                  >
                    {t('CARDS_2_FLOW_4_TEXT')}
                  </Typography>
                </div>
              </div>
              <div className={classes.textContainerLeft}>
                <div className={classes.textContainer}>
                  <Typography
                    className={classes.leftText}
                    style={{
                      marginRight: 40,
                      marginTop: 26,
                    }}
                  >
                    {t('CARDS_2_FLOW_5_TEXT')}
                  </Typography>
                </div>
              </div>
              <div className={classes.textContainerRight}>
                <div className={classes.textContainer}>
                  <Typography
                    className={classes.leftText}
                    style={{
                      marginLeft: 50,
                      marginTop: 30,
                    }}
                  >
                    {t('CARDS_2_FLOW_6_TEXT')}
                  </Typography>
                </div>
              </div>
              <div className={classes.textContainerLeft}>
                <div className={classes.textContainer}>
                  <Typography
                    className={classes.leftText}
                    style={{
                      marginRight: 30,
                      marginTop: 40,
                    }}
                  >
                    {t('CARDS_2_FLOW_7_TEXT')}
                  </Typography>
                </div>
              </div>
            </div>
            <Typography className={classes.cardFooterText}>{t('CARDS_2_FOOTER')}</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation('indexPage')(Cards);
