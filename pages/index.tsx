import React from 'react';
import IndexView from 'views/IndexView';
import Main from 'layouts/Main';

const IndexPage = () => {

  return (
    <div className="container">
      <Main>
        <IndexView />
      </Main>
    </div>
  );
};

IndexPage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'header', 'footer', 'indexPage'],
});


export default IndexPage;
