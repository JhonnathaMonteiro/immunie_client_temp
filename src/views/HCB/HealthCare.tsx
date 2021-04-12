import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Section, SectionAlternate } from 'components/organisms';
import {
  About,
  SeeAlso,
  Features,
  Hero,
  HowItWorks,
  Network,
  Partners,
  Reviews,
  Privacy,
  Story,
  Support,
} from './components';

import {
  features,
  network,
  howItWorks,
  partners,
  seeAlso,
  reviews,
} from './data';

const useStyles = makeStyles(theme => ({
  sectionAlternate: {
    backgroundImage: `linear-gradient(180deg, ${theme.palette.alternate.main} 50%, ${theme.palette.background.paper} 0%)`,
  },
  reviewSection: {
    background: theme.palette.primary.dark,
  },
}));

const HealthCare = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div>
      <Hero />
      <Section>
        <Features data={features} />
      </Section>
      <About />
      <Section>
        <Network data={network} />
      </Section>
      <SectionAlternate className={classes.sectionAlternate}>
        <HowItWorks data={howItWorks} />
      </SectionAlternate>
      <Privacy />
      <SectionAlternate>
        <Support />
      </SectionAlternate>
      <Section>
        <SeeAlso data={seeAlso} />
      </Section>
      <SectionAlternate>
        <Story />
      </SectionAlternate>
      <SectionAlternate className={classes.reviewSection} innerNarrowed>
        <Reviews data={reviews} />
      </SectionAlternate>
      <Section>
        <Partners data={partners} />
      </Section>
    </div>
  );
};

export default HealthCare;
