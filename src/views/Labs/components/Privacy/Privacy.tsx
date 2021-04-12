import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Button, Typography } from '@material-ui/core';

import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { CardReview } from 'components/organisms';
import { withTranslation } from 'i18n';
import Link from 'next/link';

const useStyles = makeStyles(() => ({
  sectionHeadlineStars: {
    maxWidth: 120,
  },
}));

const Privacy = ({ data, className, t, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <SectionHeader
        overline={
          <Image
            src="/static/images/illustrations/privacy_shield.svg"
            alt="rating"
            className={classes.sectionHeadlineStars}
            width="auto"
          />
        }
        title={
          <span>
            <Typography color="primary" variant="inherit" component="span">
              {t('PRIVACY_TITLE_1')}
            </Typography>{' '}
            {t('PRIVACY_TITLE_2')}
          </span>
        }
        subtitle={t('PRIVACY_SUBTITLE')}
        fadeUp
      />
      <Grid container spacing={isMd ? 4 : 2}>
        {data.map((review: any, index: number) => (
          <Grid key={index} item container alignItems="center" direction="column" xs={12} md={4} data-aos="fade-up">
            <CardReview
              variant="outlined"
              text={t(review.feedback)}
              icon={<></>}
              authorName={t(review.authorName)}
              authorTitle={t(review.authorOccupation)}
              authorPhoto={review.authorPhoto}
            />
          </Grid>
        ))}
        <Grid item container xs={12} justify="center">
          <Link href="/terms-of-use/privacy-policy">
            <Button variant="contained" size={isMd ? 'large' : 'medium'} color="secondary">
              {t('PRIVACY_BTN_TEXT')}
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default withTranslation('labsPage')(Privacy);
