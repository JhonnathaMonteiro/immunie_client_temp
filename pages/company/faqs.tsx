import Main from 'layouts/Main';
import React from 'react';
import FAQsView from 'views/FAQs'

const FAQs = (): JSX.Element => {

  return (
    <div className="container">
      <Main>
        <FAQsView />
      </Main>
    </div>
  );
};

FAQs.getInitialProps = async () => ({
  namespacesRequired: ['faqsPage'],
});


export default FAQs;