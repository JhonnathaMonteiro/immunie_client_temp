import React from 'react';
import ManagersPageContent from 'views/Managers'
import Main from 'layouts/Main';

const Managers = (): JSX.Element => {

  return (
    <div className="container">
      <Main>
        <ManagersPageContent />
      </Main>
    </div>
  );
};

Managers.getInitialProps = async () => ({
  namespacesRequired: ['common', 'header', 'managersPage'],
});


export default Managers;