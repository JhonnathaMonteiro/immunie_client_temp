import React from 'react';
import HealthCarePageContent from 'views/HCB'
import Main from 'layouts/Main';

const HealthCare = (): JSX.Element => {

  return (
    <div className="container">
      <Main>
        <HealthCarePageContent />
      </Main>
    </div>
  );
};

HealthCare.getInitialProps = async () => ({
  namespacesRequired: ['common', 'header', 'healthCarePage'],
});


export default HealthCare;