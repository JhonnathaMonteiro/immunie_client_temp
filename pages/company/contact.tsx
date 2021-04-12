import Main from 'layouts/Main';
import React from 'react';
import ContactView from 'views/ContactView';

const Contact = (): JSX.Element => {

  return (
    <div className="container">
      <Main>
        <ContactView />
      </Main>
    </div>
  );
};

Contact.getInitialProps = async () => ({
  namespacesRequired: ['common', 'header'],
});

export default Contact;