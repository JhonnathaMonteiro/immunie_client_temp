import Main from 'layouts/Main';
import React from 'react';
import TOCView from 'views/TOC'

const TermsAndConditions = (): JSX.Element => {

  return (
    <div className="container">
      <Main>
        <TOCView />
      </Main>
    </div>
  );
};

TermsAndConditions.getInitialProps = async () => ({
  namespacesRequired: ['tocPage'],
});


export default TermsAndConditions;