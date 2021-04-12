import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Typography, Button, useMediaQuery } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';
import { withTranslation } from 'i18n';
import Link from 'next/link';

const useStyles = makeStyles(() => ({
  root: {
    background: '#0c133e',
  },
  hero: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  section: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  textWhite: {
    color: 'white',
  },
}));

const Privacy = ({ className, t, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Section className={classes.hero}>
        <Grid container>
          <Grid item xs={12} md={6} data-aos="fade-up">
            <Section className={classes.section}>
              <>
              <Typography
                variant="h6"
                gutterBottom
                className={classes.textWhite}
              >
                {t('PRIVACY_LABEL')}
              </Typography>
              <SectionHeader
                title={
                  <span className={classes.textWhite}>
                    {t('PRIVACY_TITLE')}
                  </span>
                }
                subtitle={
                  <span className={classes.textWhite}>
                    {t('PRIVACY_SUBTITLE')}
                  </span>
                }
                ctaGroup={[
                  <Link href="/terms-of-use/privacy-policy">
                    <Button variant="contained" size="large">
                      {t('PRIVACY_BTN_TEXT')}
                    </Button>
                  </Link>
                ]}
                align="left"
                data-aos="fade-up"
              />
              </>
            </Section>
          </Grid>
          {isMd ? (
            <Grid item xs={12} md={6}>
              <Image
                src="/static/images/illustrations/encryption_vertical.png"
                srcSet="/static/images/illustrations/encryption_vertical@2x.png"
              />
            </Grid>
          ) : null}
        </Grid>
      </Section>
    </div>
  );
};

export default withTranslation('healthCarePage')(Privacy);
