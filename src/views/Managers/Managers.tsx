import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import {
  About,
  Advantages,
  // Contact,
  Description,
  // Gallery,
  Hero,
  // PromoNumbers,
  Privacy,
  Features,
  VideoSection,
} from './components';

import {
  // promoNumbers,
  advantages,
  partners,
  features,
  privacy,
  // gallery,
  teasers,
} from './data';

const useStyles = makeStyles(theme => ({
  sectionDescription: {
    background: "#156631",
  },
  sectionAlternateForm: {
    background: 'transparent',
    backgroundImage: `linear-gradient(180deg, ${theme.palette.background.paper} 300px, ${theme.palette.primary.dark} 0%)`,
  },
}));

const Managers = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div>
      <Hero />
      <SectionAlternate className={classes.sectionDescription}>
        <Description />
      </SectionAlternate>
      {/* <Section>
        <PromoNumbers data={promoNumbers} />
      </Section>
      <Divider /> */}
      <Section>
        <Advantages data={advantages} />
      </Section>
      <SectionAlternate>
        <VideoSection data={partners} />
      </SectionAlternate>
      <About data={teasers} />
      <Section narrow>
        <Features data={features} />
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

export default Managers;
