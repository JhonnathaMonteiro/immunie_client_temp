import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Section, SectionAlternate } from 'components/organisms';
import {
  Privacy,
  HowItWorks,
  Hero,
  Integrations,
  HowToUse,
  BlockchainTech,
  BuildFor,
  Partners,
  SeeAlso,
  Reviews,
  Story
} from './components';

import {
  build_for_data,
  howItWorks,
  blockchainTech,
  integrations,
  howToUse,
  partners,
  seeAlso,
  reviews,
} from './data';

const useStyles = makeStyles(theme => ({
  sectionTrucking: {
    maxWidth: '100%',
    paddingRight: 0,
    paddingLeft: 0,
  },
  howItWorksSection: {
    background: 'url(https://assets.maccarianagency.com/the-front/illustrations/patterns-bg.svg) no-repeat center',
    backgroundSize: 'contain',
  },
  integrationsSection: {
    background: "#3d93d0"
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  reviewSection: {
    background: theme.palette.primary.dark,
  },
  privacySection: {
    background: '#0c133e',
  },
}));

const Travel = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div>
      <Hero />
      <Section className={classes.sectionTrucking}>
        <BuildFor data={build_for_data} />
      </Section>
      <SectionAlternate className={classes.privacySection}>
        <Privacy />
      </SectionAlternate>
      <div className={classes.howItWorksSection}>
        <Section>
          <HowItWorks data={howItWorks} />
        </Section>
      </div>
      <SectionAlternate>
        <HowToUse data={howToUse} />
      </SectionAlternate>
      <Section>
        <BlockchainTech data={blockchainTech} />
      </Section>
      <SectionAlternate className={classes.integrationsSection}>
        <Integrations data={integrations} />
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

export default Travel;
