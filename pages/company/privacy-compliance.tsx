import React from 'react';
import PrivacyCompliance from 'views/PrivacyCompliance';
import Main from 'layouts/Main';

const PrivacyCompliancePage = (): JSX.Element => {
  return (
    <div className="container">
      <Main>
        <PrivacyCompliance />
      </Main>
    </div>
  )
};

PrivacyCompliancePage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'header', 'privacyCompliance'],
});

export default PrivacyCompliancePage;
