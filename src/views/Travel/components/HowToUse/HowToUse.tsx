import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Button, Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { CardBase } from 'components/organisms';
import { withTranslation } from 'i18n';
import Link from 'next/link';

const useStyles = makeStyles(theme => ({
  textWhite: {
    color: 'white',
  },
  cardMedia: {
    height: 180,
    margin: '0 auto',
  },
  card: {
    display: 'flex',
    boxShadow: 'none',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardHighlighted: {
    background: theme.palette.primary.dark,
  },
  image: {
    objectFit: 'cover',
  },
}));

const HowToUse = ({ data, className, t, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <SectionHeader title={t('HOW_TO_USE_TITLE')} subtitle={t('HOW_TO_USE_SUBTITLE')} data-aos="fade-up" />
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={8}>
          <Grid container spacing={isMd ? 4 : 2} direction="column">
            {data.map((item: any, index: number) => (
              <Grid item xs={12} key={index} data-aos="fade-up">
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia}>
                    <Image
                      {...item.cover}
                      alt={item.title}
                      className={classes.image}
                      lazyProps={{
                        width: '200px',
                        height: '100%',
                      }}
                    />
                  </CardMedia>
                  <CardContent className={classes.cardContent}>
                    <Typography variant="subtitle1" color="textSecondary">
                      {t(item.tag)}
                    </Typography>
                    <Typography variant="h6" color="textPrimary">
                      {t(item.title)}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container spacing={isMd ? 4 : 2} direction="column">
            <Grid item xs={12} data-aos="fade-up">
              <CardBase withShadow className={classes.cardHighlighted}>
                <SectionHeader
                  title={<span className={classes.textWhite}>{t('HOW_TO_USE_RIGTH_CARD_1_TITLE')}</span>}
                  titleVariant="h6"
                  subtitle={<span className={classes.textWhite}>{t('HOW_TO_USE_RIGTH_CARD_1_SUBTITLE')}</span>}
                  subtitleVariant="body1"
                  ctaGroup={[
                    <Link href="/company/media-assets">
                      <Button variant="contained">{t('HOW_TO_USE_RIGTH_CARD_1_BTN_TEXT')}</Button>
                    </Link>,
                  ]}
                  disableGutter
                  align="left"
                />
              </CardBase>
            </Grid>
            <Grid item xs={12} data-aos="fade-up">
              <CardBase withShadow>
                <SectionHeader
                  title={t('HOW_TO_USE_RIGTH_CARD_2_TITLE')}
                  titleVariant="h6"
                  ctaGroup={[
                    <Button variant="contained" color="primary" href="mailto:contact@immunie.net">
                      {t('HOW_TO_USE_RIGTH_CARD_2_BTN_TEXT')}
                    </Button>,
                  ]}
                  disableGutter
                  align="left"
                />
              </CardBase>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default withTranslation('travelPage')(HowToUse);
