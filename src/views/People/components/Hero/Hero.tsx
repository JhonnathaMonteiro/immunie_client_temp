import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { HeroShaped } from 'components/organisms';
import Link from 'next/link';

import { withTranslation } from 'i18n';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'url(https://assets.maccarianagency.com/the-front/illustrations/patterns-bg.svg) no-repeat left bottom',
    backgroundSize: 'contain',
    backgroundColor: theme.palette.alternate.main,
  },
  cover: {
    position: 'relative',
    zIndex: 9,
    width: '100%',
    height: '100%',
  },
  image: {
    objectFit: 'cover',
  },
}));

const Hero = ({ className, t, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <HeroShaped
        leftSide={
          <SectionHeader
            title={t('HERO_TITLE')}
            subtitle={t('HERO_SUBTITLE')}
            subtitleColor="textPrimary"
            ctaGroup={[
              <Link href="https://app.immunie.net/register">
                <Button variant="contained" color="primary" size="large">
                  {t('HERO_BTN_TEXT')}
                </Button>
              </Link>,
            ]}
            align="left"
            data-aos="fade-up"
            titleVariant="h3"
          />
        }
        rightSide={
          <div className={classes.cover}>
            <Image
              src="/static/images/photos/people_cover.jpg"
              srcSet="/static/images/photos/people_cover@2x.jpg"
              className={classes.image}
              lazyProps={{
                width: '100%',
                height: '100%',
              }}
            />
          </div>
        }
      />
    </div>
  );
};

export default withTranslation('peoplePage')(Hero);
