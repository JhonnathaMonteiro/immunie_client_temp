import React from 'react';
import { Route } from 'react-router-dom';

interface Props {
  layout: any;
  component: any;
  // All other props
  [x:string]: any;
};
const RouteWithLayout = ({ layout: Layout, component: Component, ...rest }: Props): JSX.Element => {

  return (
    <Route
      {...rest}
      render={matchProps => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

export default RouteWithLayout;
