import React from 'react';
import ServerError from 'views/ServerError';
import Minimal from 'layouts/Minimal';

const ErrorPage = (): JSX.Element => {
  return (
    <div className="container">
      <Minimal>
        <ServerError />
      </Minimal>
    </div>
  )
};

export default ErrorPage;