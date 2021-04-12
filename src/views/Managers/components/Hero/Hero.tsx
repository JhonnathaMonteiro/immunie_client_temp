import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography, Button } from '@material-ui/core';
import { HeroBackground } from 'components/organisms';
import { withTranslation } from 'i18n';
import Link from 'next/link';

const useStyles = makeStyles(() => ({
  textWhite: {
    color: 'white',
  },
  title: {
    fontWeight: 'bold',
  },
}));

const Hero = ({ className, t, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <HeroBackground backgroundImg="/static/images/photos/government_service.jpg">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              className={clsx(classes.textWhite, classes.title)}
            >
              {(t('HERO_TITLE'))}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" className={classes.textWhite} gutterBottom>
              {(t('HERO_SUBTITLE_1'))}
            </Typography>
            <Typography variant="h5" className={classes.textWhite}>
              {t('HERO_SUBTITLE_2')}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Link href="/company/media-assets">
              <Button size={isMd ? 'large' : 'medium'} variant="contained">
                {t('HERO_BTN_TEXT')}
              </Button>
            </Link>
          </Grid>
        </Grid>
      </HeroBackground>
    </div>
  );
};

export default withTranslation('managersPage')(Hero);
