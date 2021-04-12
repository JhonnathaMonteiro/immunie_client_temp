import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Section, SectionAlternate } from 'components/organisms';
import {
  Privacy,
  HowItWorks,
  Hero,
  Integrations,
  VaccinationProgram,
  WhereToUse,
  Pricings,
  WhichPlan,
  BlockchainTech,
  WhyDigitalWallet,
} from './components';

import {
  whyDigitalWallet,
  howItWorks,
  blockchainTech,
  integrations,
  vaccinationProgram,
  whereToUse,
  pricings,
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
    background: "#3d93d0",
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

const People = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div>
      <Hero />
      <Section className={classes.sectionTrucking}>
        <WhyDigitalWallet data={whyDigitalWallet} />
      </Section>
      <SectionAlternate className={classes.privacySection}>
        <Privacy />
      </SectionAlternate>
      <SectionAlternate>
        <WhereToUse data={whereToUse} />
      </SectionAlternate>
      <Section>
        <BlockchainTech data={blockchainTech} />
      </Section>
      <SectionAlternate className={classes.integrationsSection}>
        <Integrations data={integrations} />
      </SectionAlternate>
      <div className={classes.howItWorksSection}>
        <SectionAlternate>
          <HowItWorks data={howItWorks} />
        </SectionAlternate>
      </div>
      <Section>
        <Pricings data={pricings} />
      </Section>
      <SectionAlternate innerNarrowed>
        <VaccinationProgram data={vaccinationProgram} />
      </SectionAlternate>
      <Section>
        <WhichPlan />
      </Section>
    </div>
  );
};

export default People;
