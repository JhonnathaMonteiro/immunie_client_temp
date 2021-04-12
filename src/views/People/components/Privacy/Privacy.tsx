import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Button } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { withTranslation } from 'i18n';
import Link from 'next/link';

const useStyles = makeStyles(theme => ({
  textWhite: {
    color: 'white',
  },
  card: {
    '& .MuiCardContent-root': {
      justifyContent: 'space-between',
    },
    [theme.breakpoints.up('md')]: {
      // marginTop: theme.spacing(-12),
      '& .MuiCardContent-root': {
        padding: theme.spacing(11, 5),
      },
    },
  },
  cardTitle: {
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2),
    },
  },
  avatar: {
    width: 100,
    height: 100,
    boxShadow: '5px 11px 20px 0px rgba(0, 0, 0, 0.25)',
  },
  cardImage: {
    width: 300,
    borderRadius: 20,
    objectFit: 'cover',
  },
  imageContainer: {
    justifyContent: 'center'
  }
}));

const Privacy = ({ className, t, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item container alignItems="center" xs={12} md={6}>
          <SectionHeader
            title={<span className={classes.textWhite}>{t('PRIVACY_TITLE')}</span>}
            subtitle={<span className={classes.textWhite}>{t('PRIVACY_SUBTITLE')}</span>}
            subtitleVariant="body1"
            data-aos="fade-up"
            align="left"
            ctaGroup={[
              <Link href="https://immunie.net/terms-of-use/privacy-policy">
                <Button variant="contained" size="large">
                  {t('PRIVACY_BTN_TEXT')}
                </Button>
              </Link>,
            ]}
          />
        </Grid>
        <Grid className={classes.imageContainer} item container justify={isMd ? 'flex-start' : 'center'} xs={12} md={6}>
          <Image className={classes.cardImage} src="/static/images/illustrations/privacy.svg" />
        </Grid>
      </Grid>
    </div>
  );
};

export default withTranslation('peoplePage')(Privacy);
