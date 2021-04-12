import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography, Button } from '@material-ui/core';

import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { withTranslation } from 'i18n';
import Link from 'next/link'

const useStyles = makeStyles(theme => ({
  videoIframe: {
    boxShadow: `0 5px 12px 0 ${theme.palette.cardShadow}`,
    borderRadius: theme.spacing(1),
  },
  listGrid: {
    overflow: 'hidden',
  },
  partnerImage: {
    maxWidth: 80,
  },
}));

const VideoSection = ({ data, className, t, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid
        container
        justify="space-between"
        spacing={isMd ? 4 : 2}
        className={classes.listGrid}
      >
        <Grid item xs={12} md={6} data-aos={'fade-up'}>
          <Grid container spacing={2} alignItems="flex-start">
            <Grid item xs={12}>
              <SectionHeader
                title={t('VIDEO_SECTION_TITLE')}
                subtitle={t('VIDEO_SECTION_SUBTITLE')}
                ctaGroup={[
                  <Button
                    href="mailto:contact@immunie.net"
                    variant="contained"
                    color="primary"
                    size={isMd ? 'large' : 'medium'}
                  >
                    {t('VIDEO_SECTION_BTN_1_TEXT')}
                  </Button>,
                  <Link href="/company/media-assets">
                    <Button
                      variant="outlined"
                      color="primary"
                      size={isMd ? 'large' : 'medium'}
                      >
                      {t('VIDEO_SECTION_BTN_2_TEXT')}
                    </Button>
                  </Link>
                ]}
                align={isMd ? 'left' : 'center'}
                disableGutter
              />
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2} data-aos="fade-up">
                <Grid item xs={12}>
                  <Typography
                    variant="h6"
                    color="primary"
                    align={isMd ? 'left' : 'center'}
                  >
                    {t('VIDEO_SECTION_OUR_SPONSORS')}
                  </Typography>
                </Grid>
                <Grid item container justify="space-between" xs={12}>
                  {data.map((partner: any, index: number) => (
                    <Grid
                      item
                      container
                      justify="center"
                      xs={6}
                      sm={2}
                      key={index}
                    >
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        className={classes.partnerImage}
                        lazy={false}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} data-aos={'fade-up'}>
          <Grid container justify="center">
            <iframe
              className={classes.videoIframe}
              title="video"
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/i5uK_Yp9g_8"
              frameBorder="0"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default withTranslation('managersPage')(VideoSection);
