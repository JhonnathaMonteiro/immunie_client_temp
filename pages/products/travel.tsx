import React from 'react';
import TravelPageContent from 'views/Travel'
import Main from 'layouts/Main';

const Travel = (): JSX.Element => {

  return (
    <div className="container">
      <Main>
        <TravelPageContent />
      </Main>
    </div>
  );
};

Travel.getInitialProps = async () => ({
  namespacesRequired: ['common', 'header', 'travelPage'],
});


export default Travel;