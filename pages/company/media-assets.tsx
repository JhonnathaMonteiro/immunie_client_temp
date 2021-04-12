import Main from 'layouts/Main';
import MediaAssetsView from 'views/MediaAssets';
import React from 'react';

const MediaAssets = (): JSX.Element => {

  return (
    <div className="container">
      <Main>
        <MediaAssetsView />
      </Main>
    </div>
  );
};

MediaAssets.getInitialProps = async () => ({
  namespacesRequired: ['common', 'header', 'mediaAssetsPage'],
});


export default MediaAssets;