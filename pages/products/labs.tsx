import React from 'react';
import LabsPageContent from 'views/Labs'
import Main from 'layouts/Main';

const Labs = (): JSX.Element => {

  return (
    <div className="container">
      <Main>
        <LabsPageContent />
      </Main>
    </div>
  );
};

Labs.getInitialProps = async () => ({
  namespacesRequired: ['common', 'header', 'labsPage'],
});


export default Labs;