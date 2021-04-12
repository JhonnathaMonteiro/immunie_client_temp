import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography, Button } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { withTranslation } from 'i18n';
import Link from 'next/link'

const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: 'bold',
  },
  image: {
    maxWidth: 140,
  },
  gridCard: {
    padding: theme.spacing(2),
    background: theme.palette.alternate.main,
    borderRadius: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(4),
    },
  },
  subtitle: {
    margin: theme.spacing(2, 0),
  },
}));

const WhichPlan = ({ className, t, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <SectionHeader title={t('WHICH_PLAN_TITLE')} subtitle={t('WHICH_PLAN_SUBTITLE')} data-aos="fade-up" />
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Grid container className={classes.gridCard} data-aos="fade-up" spacing={2}>
            <Grid item container justify={isMd ? 'flex-start' : 'center'} alignItems="center" xs={12} md={6}>
              <Image
                src="https://assets.maccarianagency.com/the-front/illustrations/relax-working.svg"
                className={classes.image}
              />
            </Grid>
            <Grid
              item
              container
              justify="space-between"
              alignItems={isMd ? 'flex-start' : 'center'}
              xs={12}
              md={6}
              direction="column"
            >
              <Typography variant="h6" className={classes.title} color="textPrimary" align={isMd ? 'left' : 'center'}>
                {t('WHICH_PLAN_CARD_1_TITLE')}
              </Typography>
              <Typography
                variant="subtitle1"
                color="textPrimary"
                align={isMd ? 'left' : 'center'}
                className={classes.subtitle}
              >
                {t('WHICH_PLAN_CARD_1_SUBTITLE')}
              </Typography>
              <Link href="/company/media-assets">
                <Button color="primary" variant="contained" >
                  {t('WHICH_PLAN_CARD_1_BTN_TEXT')}
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container className={classes.gridCard} data-aos="fade-up" spacing={2}>
            <Grid item container justify={isMd ? 'flex-start' : 'center'} alignItems="center" xs={12} md={6}>
              <Image
                src="https://assets.maccarianagency.com/the-front/illustrations/relax-working.svg"
                className={classes.image}
              />
            </Grid>
            <Grid
              item
              container
              justify="space-between"
              alignItems={isMd ? 'flex-start' : 'center'}
              xs={12}
              md={6}
              direction="column"
            >
              <Typography variant="h6" className={classes.title} color="textPrimary" align={isMd ? 'left' : 'center'}>
                {t('WHICH_PLAN_CARD_2_TITLE')}
              </Typography>
              <Typography
                variant="subtitle1"
                color="textPrimary"
                align={isMd ? 'left' : 'center'}
                className={classes.subtitle}
              >
                {t('WHICH_PLAN_CARD_2_SUBTITLE')}
              </Typography>
              <Link href="/company/media-assets">
                <Button color="primary" variant="contained">
                  {t('WHICH_PLAN_CARD_2_BTN_TEXT')}
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default withTranslation('peoplePage')(WhichPlan);
