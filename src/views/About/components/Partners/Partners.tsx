import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { withTranslation } from 'i18n';

const useStyles = makeStyles(theme => ({
  promoLogo: {
    maxHeight: 60,
    margin: '0 auto',
    padding: 10,
  },
  promoLogoFirst: {
    maxHeight: 60,
    margin: '0 auto',
    marginRight: -24,
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
  },
}));

const Partners = ({ data, className, t, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={6}>
          <SectionHeader
            title={t('PARTNERS_TITLE')}
            subtitle={t('PARTNERS_SUBTITLE')}
            fadeUp
            disableGutter
            align={isMd ? 'left' : 'center'}
            titleProps={{
              className: classes.title,
            }}
          />
        </Grid>
        <Grid item container xs={12} md={6}>
          <Grid item container justify="center" alignItems="center" xs={4} data-aos="fade-up">
            <Image src={data[0].logo} alt={data[0].name} className={classes.promoLogoFirst} lazy={false} />
          </Grid>
          <Grid item container justify="center" alignItems="center" xs={4} data-aos="fade-up">
            <Image src={data[1].logo} alt={data[1].name} className={classes.promoLogo} lazy={false} />
          </Grid>
          <Grid item container justify="center" alignItems="center" xs={4} data-aos="fade-up">
            <Image src={data[2].logo} alt={data[2].name} className={classes.promoLogo} lazy={false} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default withTranslation('aboutPage')(Partners);
