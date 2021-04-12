import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import { Description, Cards, Privacy, NavigationCarousel, HowItWorks, Technology, Languages } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  fullHeight: {
    width: '100%',
    height: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  parallaxSection: {
    backgroundColor: '#0000008a',
  },
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  cardSection: {
    background: "url('/static/images/paths/index_top_path.svg') top",
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    minHeight: 700,
  },
  privacySection: {
    background: "url('/static/images/paths/index_bottom_path.svg') bottom",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    marginBottom: -180,
  },
  description: {
    marginTop: '-6rem',
  },
}));

const IndexView = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavigationCarousel />
      <Section className={classes.description}>
        <Description />
      </Section>
      <SectionAlternate>
        <HowItWorks />
      </SectionAlternate>
      <Section>
        <Languages />
      </Section>
      <div className={classes.cardSection}>
        <Section>
          <Cards />
        </Section>
      </div>
      <Section>
        <Technology />
      </Section>

      <div className={classes.privacySection}>
        <Section>
          <Privacy />
        </Section>
      </div>
    </div>
  );
};

export default IndexView;
