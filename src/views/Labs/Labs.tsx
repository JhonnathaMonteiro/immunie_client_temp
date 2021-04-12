import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { colors, Divider } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import {
  About,
  Advantages,
  // Contact,
  Description,
  // Gallery,
  Hero,
  Privacy,
  Features,
  VideoSection,
} from './components';

import {
  advantages,
  partners,
  features,
  privacy,
  // gallery,
  teasers,
} from './data';

const useStyles = makeStyles(theme => ({
  sectionDescription: {
    background: colors.blue[900],
  },
  sectionAlternateForm: {
    background: 'transparent',
    backgroundImage: `linear-gradient(180deg, ${theme.palette.background.paper} 300px, ${theme.palette.primary.dark} 0%)`,
  },
}));

const Labs = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div>
      <Hero />
      <SectionAlternate className={classes.sectionDescription}>
        <Description />
      </SectionAlternate>
      <Divider />
      <Section>
        <Features data={features} />
      </Section>
      <SectionAlternate>
        <VideoSection data={partners} />
      </SectionAlternate>
      <About data={teasers} />
      <Divider />
      <Section narrow>
        <Advantages data={advantages} />
      </Section>
      <Divider />
      <SectionAlternate>
        <Privacy data={privacy} />
      </SectionAlternate>
      {/* <Gallery data={gallery} /> */}
      {/* <div className={classes.sectionAlternateForm}>
        <Section narrow>
          <Contact />
        </Section>
      </div> */}
    </div>
  );
};

export default Labs;
