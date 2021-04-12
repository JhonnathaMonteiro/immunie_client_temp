import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';
import { Section } from 'components/organisms';
import {
  Hero,
  BrandGuidelines,
  Catalogs,
  Calendars,
  Infographic,
} from './components';

import {
  catalogs,
  calendars
} from './data';

const useStyles = makeStyles(theme => ({
  sectionDescription: {
    background: colors.blue[900],
  },
  sectionContainer: {
    padding: 50
  }
}));

const MediaAssets = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div>
      <Hero />
      <Section className={classes.sectionContainer}>
        <BrandGuidelines />
      </Section>
      <Section className={classes.sectionContainer}>
        <Catalogs data={catalogs}/>
      </Section>
      <Section className={classes.sectionContainer}>
        <Calendars data={calendars}/>
      </Section>
      <Section className={classes.sectionContainer}>
        <Infographic />
      </Section>
    </div>
  );
};

export default MediaAssets;
