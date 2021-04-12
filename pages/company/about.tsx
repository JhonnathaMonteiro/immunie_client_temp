import React from 'react';
import About from 'views/About';
import Main from 'layouts/Main';

const AboutPage = (): JSX.Element => {
  return (
    <div className="container">
      <Main>
        <About />
      </Main>
    </div>
  )
};

AboutPage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'header', 'aboutPage'],
});

export default AboutPage;
