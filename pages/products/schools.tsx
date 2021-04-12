import React from 'react';
import SchoolsPageContent from 'views/Schools'
import Main from 'layouts/Main';

const Schools = (): JSX.Element => {

  return (
    <div className="container">
      <Main>
        <SchoolsPageContent />
      </Main>
    </div>
  );
};

Schools.getInitialProps = async () => ({
  namespacesRequired: ['common', 'header', 'schoolPage'],
});


export default Schools;