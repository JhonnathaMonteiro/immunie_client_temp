import Main from 'layouts/Main';
import React from 'react';
import PrivacyPolicyView from 'views/PrivacyPolicy'

const PrivacyPolicy = (): JSX.Element => {

  return (
    <div className="container">
      <Main>
        <PrivacyPolicyView />
      </Main>
    </div>
  );
};

PrivacyPolicy.getInitialProps = async () => ({
  namespacesRequired: ['privacyPolicyPage'],
});


export default PrivacyPolicy;